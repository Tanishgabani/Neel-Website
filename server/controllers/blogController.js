const Blog = require('../models/Blog');

// GET all published blogs (paginated)
exports.getBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const category = req.query.category;
    const skip = (page - 1) * limit;

    const filter = { published: true };
    if (category && category !== 'All') filter.category = category;

    const [blogs, total] = await Promise.all([
      Blog.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('-content'),
      Blog.countDocuments(filter),
    ]);

    res.json({
      blogs,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      total,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug, published: true },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET featured/latest 3 blogs
exports.getFeaturedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(3)
      .select('-content');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create blog (admin)
exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update blog (admin)
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE blog (admin)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Seed sample blogs
exports.seedBlogs = async (req, res) => {
  try {
    const sampleBlogs = [
      {
        title: 'The Future of Li-Ion Battery Recycling in India',
        excerpt: 'As electric vehicle adoption accelerates, the demand for sustainable Li-ion battery recycling has never been greater. India stands at a pivotal moment.',
        content: `<p>The lithium-ion battery revolution is transforming transportation and energy storage globally. India, with its ambitious EV targets, faces a critical challenge: what happens to these batteries at end-of-life?</p><p>Rare Mines Cleantech is pioneering solutions through our proprietary HYBRID-HYDROMETALLURGY™ process, which extracts precious metals like lithium, cobalt, and nickel with minimal environmental impact.</p><h2>The Scale of the Problem</h2><p>By 2030, India alone is projected to generate over 1.2 million metric tonnes of end-of-life Li-ion batteries. Without proper recycling infrastructure, these batteries pose serious environmental and health risks.</p><h2>Our Solution</h2><p>Our carbon-neutral process recovers up to 95% of valuable materials, returning them to the supply chain and reducing dependency on virgin mining operations.</p>`,
        category: 'Technology',
        tags: ['recycling', 'lithium-ion', 'EV', 'sustainability'],
        author: { name: 'Rare Mines Research Team' },
        published: true,
        readTime: 4,
      },
      {
        title: 'Understanding Extended Producer Responsibility (EPR) for Batteries',
        excerpt: 'New EPR regulations in India are reshaping how battery manufacturers think about end-of-life responsibility. Here is what you need to know.',
        content: `<p>The Battery Waste Management Rules (BWMR) 2022 introduced Extended Producer Responsibility (EPR) for batteries in India, creating both obligations and opportunities for manufacturers.</p><h2>What is EPR?</h2><p>EPR requires producers, importers, and brand owners to take responsibility for the collection and recycling of batteries they place on the market.</p><h2>Compliance Requirements</h2><p>Companies must register with the Central Pollution Control Board (CPCB) and meet annual collection targets that increase over time.</p><h2>How Rare Mines Can Help</h2><p>As a government-approved entity, we offer comprehensive EPR partnership programs that ensure full BWMR compliance while maximizing material recovery value.</p>`,
        category: 'Industry News',
        tags: ['EPR', 'compliance', 'BWMR', 'regulations'],
        author: { name: 'Rare Mines Legal Team' },
        published: true,
        readTime: 5,
      },
      {
        title: 'Critical Minerals: The Building Blocks of the Clean Energy Transition',
        excerpt: 'Cobalt, lithium, nickel — these critical minerals are essential for the energy transition. Recycling is key to securing sustainable supply chains.',
        content: `<p>The clean energy transition depends on a reliable supply of critical minerals. Solar panels, wind turbines, and electric vehicles all require materials that are geographically concentrated and increasingly in demand.</p><h2>The Supply Chain Challenge</h2><p>Currently, over 60% of global cobalt production comes from a single country, creating significant supply chain vulnerabilities for battery manufacturers worldwide.</p><h2>Recycling as a Solution</h2><p>Secondary production through recycling offers a domestic, sustainable alternative to primary mining. Our HHM™ process recovers battery-grade materials that can re-enter the supply chain immediately.</p><h2>India's Opportunity</h2><p>With India's growing battery manufacturing ecosystem, establishing robust recycling infrastructure now creates a competitive advantage for decades to come.</p>`,
        category: 'Research',
        tags: ['critical minerals', 'cobalt', 'lithium', 'supply chain'],
        author: { name: 'Rare Mines Research Team' },
        published: true,
        readTime: 6,
      },
      {
        title: 'Rare Mines Signs Strategic MoU with Karnataka Government',
        excerpt: 'A landmark agreement positions Rare Mines Cleantech as a key player in Karnataka\'s critical minerals ecosystem worth ₹350 crore.',
        content: `<p>Rare Mines Cleantech Pvt Ltd has signed a Memorandum of Understanding (MoU) with the Karnataka Government to establish a critical minerals refining complex, representing an investment of ₹350 crore.</p><h2>Project Scope</h2><p>The facility will process end-of-life lithium-ion batteries and recover critical minerals including lithium, cobalt, and nickel using our proprietary HYBRID-HYDROMETALLURGY™ process.</p><h2>Economic Impact</h2><p>The project is expected to create over 500 direct jobs and contribute significantly to Karnataka's emerging clean technology corridor.</p>`,
        category: 'Company Updates',
        tags: ['Karnataka', 'MoU', 'government', 'investment'],
        author: { name: 'Rare Mines Communications' },
        published: true,
        readTime: 3,
      },
      {
        title: 'How Hydrometallurgy is Revolutionizing Battery Recycling',
        excerpt: 'Traditional pyrometallurgical methods are energy-intensive and polluting. Hydrometallurgy offers a cleaner, more efficient alternative for the 21st century.',
        content: `<p>Battery recycling has historically relied on high-temperature smelting (pyrometallurgy), a process that consumes enormous energy and releases toxic gases. The industry is now shifting toward hydrometallurgical approaches.</p><h2>The Science Behind HHM™</h2><p>Our Hybrid Hydrometallurgy process uses aqueous chemistry at lower temperatures to selectively dissolve and recover individual metals with high purity.</p><h2>Environmental Advantages</h2><p>Compared to pyrometallurgy, our process reduces energy consumption by up to 40% and eliminates toxic gas emissions, making it genuinely carbon-neutral.</p><h2>Commercial Viability</h2><p>The lower operational costs combined with high material recovery rates make HHM™ economically competitive even at smaller scales of operation.</p>`,
        category: 'Technology',
        tags: ['hydrometallurgy', 'technology', 'process', 'innovation'],
        author: { name: 'Dr. R. Sharma, CTO' },
        published: true,
        readTime: 7,
      },
      {
        title: 'SDG Goals and the Role of Clean Technology Companies',
        excerpt: 'The United Nations Sustainable Development Goals provide a framework for how companies like Rare Mines can contribute to a more equitable and sustainable world.',
        content: `<p>The 17 UN Sustainable Development Goals (SDGs) represent humanity's blueprint for a better future by 2030. Clean technology companies sit at the intersection of multiple SDGs, from climate action to responsible consumption.</p><h2>Our SDG Alignment</h2><p>At Rare Mines, we directly contribute to SDG 7 (Affordable and Clean Energy), SDG 12 (Responsible Consumption), SDG 13 (Climate Action), and SDG 15 (Life on Land).</p><h2>Measuring Impact</h2><p>For every tonne of batteries we recycle, we prevent approximately 12 tonnes of CO₂ equivalent from entering the atmosphere compared to virgin mining operations.</p>`,
        category: 'Sustainability',
        tags: ['SDG', 'sustainability', 'UN goals', 'impact'],
        author: { name: 'Rare Mines Sustainability Team' },
        published: true,
        readTime: 5,
      },
    ];

    await Blog.deleteMany({});
    await Blog.insertMany(sampleBlogs);
    res.json({ message: `${sampleBlogs.length} sample blogs seeded successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
