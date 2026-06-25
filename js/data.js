/*
================================================================================
DATA.JS - EASY CONTENT EDITING FILE
================================================================================

This file contains all the dynamic content for your website.
To add team members, publications, or blog posts, simply follow the patterns below.

HOW TO EDIT:
1. Find the section you want to edit (teamMembers, publications, or blogPosts)
2. Copy an existing entry
3. Paste it and modify the values
4. Save the file

IMPORTANT NOTES:
- Keep all the quotation marks and commas
- Don't delete the brackets [ ] or braces { }
- Each entry should end with a comma EXCEPT the last one

================================================================================
*/

// ============================================================================
// TEAM MEMBERS
// ============================================================================
// To add a new team member, copy from { to }, including the comma at the end

const teamMembers = [
    // Principal Investigators
    {
        id: "member1",
        name: "Louis Tay",
        role: "Principal Investigator",
        department: "Psychology",
        image: "images/team/louis stay.jpg",
        email: "stay@purdue.edu",
        bio: "Louis Tay is William C. Byham Professor of Industrial-Organizational Psychology at Purdue University. His substantive research interests include well-being (subjective well-being, psychological well-being), character strengths, and vocational interests. His methodological research interests include measurement, item response theory, latent class modeling, multilevel analysis, and data science. He is a co-editor of the books Big Data in Psychological Research (APA Books), Handbook of Well-Being (DEF Publishers), Handbook of Positive Psychology Assessment (Hogrefe), Oxford Handbook of the Positive Humanities (Oxford), and Technology and Measurement around the Globe (Cambridge). His research has appeared in journals such as American Psychologist, Nature Human Behavior, Psychological Bulletin, Perspectives on Psychological Science, Journal of Personality and Social Psychology, Psychological Science, Journal of Applied Psychology, Personnel Psychology, and Organizational Research Methods. His research has also appeared in various media outlets such as The Wall Street Journal, APA Monitor on Psychology, Scientific American Mind, Psychology Today, and MSNBC. He was awarded the 2015 Rising Star award from the Association of Psychological Science, the 2016 Sage Publications/RMD/CARMA Early Career Award, the 2016 Ruut Veenhoven Award for Happiness Research, and the 2019 Society for Personality and Social Psychology (SPSP) Sage Young Scholars Award. He has contributed to the United Nations’ research reports on well-being and serves in consulting roles for top tech companies and Fortune 500 organizations. Consultations have involved topics such as better understanding customer and employee well-being, improving recruitment and selection processes, and understanding biases in measurement, machine learning, and AI. He is the co-founder of the tech startup ExpiWell, which advances the science and capture of daily life experiences through experience sampling methodology.",
        research: "Well-being, artificial intelligence, virtue-centered AI, positive psychology",
        education: "Professor at Purdue University",
        publications: "Extensive research on well-being and AI applications"
    },
    {
        id: "member2",
        name: "Ashton Anderson",
        role: "Principal Investigator",
        department: "Computer Science",
        image: "images/team/AshtonAnderson.jpg",
        email: "ashton@cs.toronto.edu",
        bio: "Ashton Anderson is a Principal Investigator specializing in computational social science and machine learning applications.",
        research: "Computational social science, machine learning, AI for social good",
        education: "University of Toronto",
        publications: "Research on algorithms and systems for social impact"
    },
    {
        id: "member3",
        name: "Karina Vold",
        role: "Principal Investigator",
        department: "Philosophy & Ethics",
        image: "images/team/Karina Vold.jpg",
        email: "karina.vold@utoronto.ca",
        bio: "Dr. Karina Vold is a philosopher of cognitive science and artificial intelligence & an assistant professor at the University of Toronto. She works at the intersection of the philosophy of cognitive science, the philosophy of technology, artificial intelligence (AI), and applied ethics. She is cross-appointed in the Institute for the History and Philosophy of Science and Technology (IHPST) and the Department of Philosophy. Before joining the IHPST, she worked as a postdoctoral research associate at the Leverhulme Centre for the Future of Intelligence at the University of Cambridge. In her recent work, Vold has written on the implications of theories of extended cognition, on responsible innovation in online therapy, and on the capabilities and risks of AI. Her current projects include researching the effects of AI on human cognition and autonomy, understanding the harms arising from targeted online “nudging,” evaluating arguments for existential threats from AI, and building frameworks for the ethical design of AI systems.",
        research: "AI ethics, philosophy of technology, ethical AI development",
        education: "Philosophy and AI Ethics",
        publications: "Research on ethical considerations in AI development"
    },
    // Postdoctoral Researchers
    {
        id: "member4",
        name: "Amal Chekili",
        role: "Postdoctoral Research Associate",
        department: "Industrial-Organizational Psychology",
        image: "images/team/Amal Chekili.jpg",
        email: "achekili@purdue.edu",
        bio: "Amal Chekili is a Postdoctoral Research Associate in the WAM Lab at Purdue University. She earned her doctorate in Industrial-Organizational Psychology from Virginia Tech, where she also completed a master's degree in Data Analysis and Statistics. Her research is centered on studying the benefits, challenges, and opportunities of artificial intelligence (AI) in organizational settings. Leveraging conversational large language models and other natural-language-processing techniques, Amel tackles organizational problems while keeping a strong focus on diversity, equity, and inclusion. Through her work, she highlights AI's transformative potential and the considerations needed to foster more inclusive workplaces.",
        research: "AI in organizational settings, diversity and inclusion, natural language processing, conversational AI",
        education: "Ph.D. in Industrial-Organizational Psychology from Virginia Tech | M.A. in Data Analysis and Statistics from Virginia Tech",
        publications: "Research on AI applications in organizational contexts with focus on DEI"
    },
    {
        id: "member5",
        name: "Daniel Harris",
        role: "Postdoctoral Researcher",
        department: "Philosophy & AI Safety",
        image: "images/team/danielharris.png",
        email: "daniel.harris2@mail.mcgill.ca",
        bio: "Dr. Daniel Harris is a postdoctoral researcher at the University of Toronto, and at the Schwartz Reisman Institute for Technology and Society. Daniel holds a Ph.D. in Philosophy (McGill University), an MPhil Studies in Philosophy (King's College London), an M.A. in Theory, Culture & Politics (Trent University), and a B.A. in Philosophy & Information Systems (Trent University). His research explores topics in AI safety, catastrophic risks, human-AI interaction, and game theory.",
        research: "AI safety, catastrophic risks, human-AI interaction, game theory",
        education: "Ph.D. in Philosophy from McGill University | MPhil from King's College London | M.A. from Trent University",
        publications: "Research on AI safety and human-AI interaction"
    },
    {
    id: "member6a",
    name: "Jinsoo Choi",
    role: "Postdoctoral Research Associate",
    department: "Industrial-Organizational Psychology",
    image: "images/team/jinsoo.png",
    email: "jinsooc2@illinois.edu",
    bio: "Jinsoo Choi is a Postdoctoral Research Associate in the WAM Lab at Purdue University. He earned his PhD in Industrial-Organizational Psychology from the University of Illinois Urbana-Champaign, with a minor in Quantitative Psychology. His research encompasses personnel selection, advanced research methods, and well-being. In the domain of personnel selection, he focuses on the rigorous development and validation of pre-employment tools, including cognitive and personality tests, and explores fake-resistant measures such as forced-choice formats to mitigate impression management in high-stakes situations. He also applies multi-objective optimization techniques to address the validity-fairness dilemma. Methodologically, his work integrates artificial intelligence into general psychology and selection processes, utilizing AI conversational agents to promote long-term human flourishing through character virtues. Additionally, he develops structural equation modeling techniques to examine hierarchical psychological constructs and resolve related statistical issues. Ultimately, his research is driven by the goal of enhancing subjective well-being, aiming to help individuals flourish by improving life/job satisfaction and making life/work feel more meaningful.",
    research: "Personnel selection, assessment and fairness, structural equation modeling, AI/ML in psychology, well-being, life/job satisfaction, meaningfulness",
    education: "Ph.D. in Industrial-Organizational Psychology from the University of Illinois Urbana-Champaign (2026) | Minor in Quantitative Psychology",
    publications: "Research published in Psychological Methods, Structural Equation Modeling: A Multidisciplinary Journal, Assessment, and Personality and Individual Differences"
},
{
        id: "member6b",
        name: "Lauren Moran",
        role: "Postdoctoral Research Associate",
        department: "Industrial-Organizational Psychology",
        image: "images/team/Lauren.png",
        email: "lmoran9@gatech.edu",
        bio: "Lauren Moran is an incoming postdoctoral research associate in the WAM Lab at Purdue University. At present, she is wrapping up her PhD in Industrial-Organizational (I-O) Psychology at the Georgia Institute of Technology. She also holds an M.S. in I-O psychology from Georgia Institute of Technology and a B.S. in Psychology from Florida State University. Her research has centered on worker health and well-being, spanning topics such as recovery from work, employee benefits, and commuting experiences. Over the last few years, she has increasingly considered the ways in which emerging technologies affect worker experiences, including projects on the integration of AI teammates into mental healthcare, and the use of AI for job crafting. Throughout her research, she enjoys leveraging a variety of mixed-methods approaches to uncover how to best support workers' flourishing.",
        research: "Worker health and well-being, AI teammates, team membership dynamics",
        education: "Ph.D. in Industrial-Organizational Psychology from Georgia Institute of Technology | M.S. in I-O Psychology from Georgia Institute of Technology | B.S. in Psychology from Florida State University",
        publications: ""
    },
    // Graduate Students
    {
        id: "member6",
        name: "Harsh Kumar",
        role: "Ph.D. Student",
        department: "Computer Science",
        image: "images/team/Harsh Kumar.jpg",
        email: "harsh@cs.toronto.edu",
        bio: "Harsh Kumar is a fourth-year PhD student in the Department of Computer Science at the University of Toronto, supervised by Dr. Ashton Anderson. His research focuses on developing algorithms and systems for social good, particularly in cognition, mental health, and education. In much of his current work, he has conducted large-scale human-centered evaluations of AI systems. For instance, he conducted one of the first large-scale randomized controlled trials demonstrating that large language models (LLMs) can enhance math education. In another recent study, he investigated how regular use of LLMs affects human creativity. He is also working on designing LLM agents that can act as coaches to promote behavior change. Earlier in his research, he developed algorithms to personalize mental health support for young adults using reinforcement learning techniques like contextual bandits. He has been very fortunate to spend two summers at Microsoft Research in New York City with Dan Goldstein, Jake Hofman, and David Rothschild, learning the ropes of conducting rigorous experiments and working on problems related to LLMs and education.",
        research: "AI for social good, education technology, mental health AI, LLM agents, reinforcement learning",
        education: "Ph.D. Student in Computer Science at University of Toronto",
        publications: "Research on LLMs in education and creativity, AI coaching systems, personalized mental health interventions"
    },
        {
        id: "member7",
        name: "Daniel Monroe",
        role: "Ph.D. Student",
        department: "Computer Science",
        image: "images/team/Daniel Monroe.jpg",
        email: "daniel.monroe@gmail.utoronto.ca",
        bio: "Daniel Monroe is Ph.D. student at the university of Toronto, supervised by Ashton Anderson. He holds a B.A. in mathematics from the University of California, San Diego.",
        research: "Machine learning, reinforcement learning, formal verification for AI",
        education: "B.A. in Mathematics from the University of California, San Diego",
        publications: "Chessformer: a Unified Architecture for Chess Modeling (ICLR 2026)"
    },
         {
        id: "member8",
        name: "Renée Andrea Sirbu",
        role: "Ph.D. Student",
        department: "Philosophy",
        image: "images/team/Renée Andrea Sirbu.jpg",
        email: "renee.sirbu@mail.utoronto.ca",
        bio: "Renée Andrea Sirbu is a Ph.D. student at the Institute for the History and Philosophy of Science and Technology (IHPST). Renée received her B.Sc. in Human Biology, Bioethics, and Philosophy at UofT and her M.P.H. in Health Policy and Public Health Modeling from Yale, before spending two years as a predoctoral researcher at Yale's Digital Ethics Center. Her research explores the intersection of mortality and digital technology, focusing on human-computer interaction, brain-computer interfaces, and AI in clinical settings.",
        education: "B.Sc. in Human Biology, Bioethics, and Philosophy from the University of Toronto | M.P.H. in Health Policy and Public Health Modeling from Yale University",
        research: "Intersection of mortality and digital technology, human-computer interaction, brain-computer interfaces, AI in clinical settings",
        publications: "Research on AI and machine learning, tech ethics, data ethics, health policy, and bioethics"
    },
        {
        id: "member9",
        name: "Pooyan Ehsani",
        role: "Ph.D. Student",
        department: "Philosophy",
        image: "images/team/Pooyan Ehsani.jpg",
        email: "pooyan.ehsani@mail.utoronto.ca",
        bio: "Pooyan Ehsani is currently pursuing a Master's degree at the Institute for the History and Philosophy of Science and Technology (IHPST). His main areas of interest are AI ethics, ethical design, and the ethical implications of AI. With experience as a machine learning engineer, Pooyan aims to focus on the problem of human autonomy within AI systems.",
        education: "",
        research: "AI ethics, ethical design, the ethical implications of AI",
        publications: "Research on machine learning and optimization",
    },
    // Research Staff
    {
        id: "member10",
        name: "Hillary Merzdorf",
        role: "Grant Manager",
        department: "Research Operations",
        image: "images/team/Hillary Merzdorf.jpg",
        email: "hmerzdor@purdue.edu",
        bio: "Hillary Merzdorf is a Research Operations Administrator in the Department of Psychological Sciences at Purdue University. She earned a Ph.D. in Engineering Education from Purdue University in 2022, where she also earned degrees in Psychology, Educational Psychology, and Industrial Engineering. She has experience in instructional design, assessment development and validation, and user-centered educational technology. She is interested in the role of computers and intelligent systems to support cognition and learning, and she enjoys mentoring student researchers.",
        research: "Educational technology, instructional design, user-centered design, AI in learning",
        education: "Ph.D. in Engineering Education from Purdue University | M.S. Degrees in Educational Psychology and Industrial Engineering",
        publications: "Research on educational technology and assessment development"
    },
    {
        id: "member11",
        name: "Rediet Shiferahu",
        role: "Communications Specialist",
        department: "Communications & Research",
        image: "images/team/Rediet Shiferahu.JPG",
        email: "rshifera@purdue.edu",
        bio: "Rediet Shiferahu is a Post-Baccalaureate Researcher in the Department of Psychological Sciences at Purdue University. She earned her B.A. in psychology from Colgate University with minors in Global Public and Environmental Health and Women’s Studies. Her research explores how relationships, sleep, and storytelling shape well-being and healing, as well as how people’s connections with food reflect emotion, identity, and resilience. Her interests include how sleep influences relational functioning, how trauma and embodiment shape the stories people tell about themselves, and how cultural narratives around food, shame, and identity influence emotional resilience. She has also contributed to global research efforts examining community healing and historical trauma in Namibia and South Africa. Her current work examines emerging intersections between well-being science and conversational AI, with a focus on designing systems that support emotional safety, dignity, and culturally grounded flourishing. Across all her projects, she is motivated by a central question: How do human relationships and personal narratives shape the path to healing?",
       research: "Well-being, relationships, sleep, Trauma & Healing, Embodiment, Human–AI Interaction",
        education: "B.A. in Psychology from Colgate University | Minors in Global Public and Environmental Health and Women's Studies",
        publications: "Research on well-being, relationships, and the psychology of food and storytelling"
    }
];

// ============================================================================
// PUBLICATIONS
// ============================================================================
// To add a new publication, copy an entry and modify the details

const publications = [
    {
        id: "pub1",
        title: "Advances in subjective well-being research",
        authors: "Ed Diener, Shigehiro Oishi, and Louis Tay",
        year: 2018,
        journal: "Nature Human Behaviour",
        abstract: "The empirical science of subjective well-being, popularly referred to as happiness or satisfaction, has grown enormously in the past decade. In this Review, we selectively highlight and summarize key researched areas that continue to develop. We describe the validity of measures and their potential biases, as well as the scientific methods used in this field. We describe some of the predictors of subjective well-being such as temperament, income and supportive social relationships. Higher subjective well-being has been associated with good health and longevity, better social relationships, work performance and creativity. At the community and societal levels, cultures differ not only in their levels of well-being but also to some extent in the types of subjective well-being they most value. Furthermore, there are both universal and unique predictors of subjective well-being in various societies. National accounts of subjective well-being to help inform policy decisions at the community and societal levels are now being considered and adopted. Finally we discuss the unknowns in the science and needed future research.",
        pdfLink: "https://www.nature.com/articles/s41562-018-0307-6",
        doiLink: "https://www.nature.com/articles/s41562-018-0307-6",
        featured: true
    },
    { 
        id: "pub2",
        title: "When AI Gives Advice: Evaluating AI and Human Responses to Online Advice-Seeking for Well-Being",
        authors: "Harsh Kumar, Jasmine Chahal, Yinuo Zhao, Zeling Zhang, Annika Z Wei, Louis Tay, and Ashton Anderson",
        year: 2026,
        journal: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems",
        abstract: "Seeking advice is a core human behavior that the internet has reinvented twice: first through forums and Q&A communities that crowdsource public guidance, and now through large language models (LLMs). Yet the quality of this LLM advice for everyday well-being scenarios remains unclear. How does it compare, not only against human comments, but against the wisdom of the online crowd? We ran two studies (N=210) in which experts compared top-voted Reddit advice with LLM-generated advice. LLMs ranked significantly higher overall and on effectiveness, warmth, and willingness to seek advice again. GPT-4o beat GPT-5 on all metrics except sycophancy, suggesting that benchmark gains need not improve advice-giving. In Study-2, we examined how human and algorithmic advice could be combined, and found that human advice can be unobtrusively polished to compete with AI-generated comments. We conclude with design implications for advice-giving agents and ecosystems blending AI, crowd input, and expert oversight.",
        pdfLink: "https://dl.acm.org/doi/pdf/10.1145/3772318.3791233",
        doiLink: "https://dl.acm.org/doi/full/10.1145/3772318.3791233",
        featured: true
    },
    {
        id: "pub3",
        title: "The Development and Validation of the Comprehensive Inventory of Thriving (CIT) and the Brief Inventory of Thriving (BIT)",
        authors: "Rong Su, Louis Tay, Ed Diener.",
        year: 2014,
        journal: "Applied Psychology: Health and Well‐Being",
        abstract:`In this article we present the development and validation of two new measures of psychological well-being: the Comprehensive Inventory of Thriving (CIT) and the Brief Inventory of Thriving (BIT). These measures were developed with two specific goals in mind: (1) to measure a broad range of psychological well-being constructs and represent a holistic view of positive functioning; and (2) to predict important health outcomes that are useful for researchers and health practitioners. The CIT includes 18 subscales with 54 items in total, covering a broad range of well-being components. The BIT has 10 items in total and can serve as an indicator of psychological well-being and a brief screening tool of mental health. The new measures were evaluated in five samples of a total of 3,191 US participants with diverse demographics. The CIT and BIT had excellent psychometric properties and exhibited convergent validity with existing measures of psychological well-being and discriminant validity with measures of ill-being. Both measures contributed over and above existing measures of psychological well-being in predicting a variety of health outcomes, including self-reported and objective health status, physical functioning, and health behaviors. In addition, we showed the relative importance of thriving compared to ill-being for health outcomes and the benefits of assessing individuals’ positive functioning beyond ill-being. Potential uses of the new measures are discussed.`,

        pdfLink: "https://iaap-journals.onlinelibrary.wiley.com/doi/epdf/10.1111/aphw.12027",
        doiLink: " https://doi.org/10.1111/aphw.12027",
        featured: true
    },
    {
        id: "pub4",
        title: "Conceptualizing “positive attributes” across psychological perspectives",
        authors: "Danielle Wilson, Vincent Ng, Nicole Alonso, Anne Jeffrey, and Louis Tay",
        year: 2023,
        journal: " Journal of Personality",
        abstract: "The growth of positive psychology has birthed debate on the nature of what “positive” really means. Conceptualizations of positive attributes vary across psychological perspectives, and it appears these definitional differences stem from standards for “positive” espoused by three normative ethical frameworks: consequentialism, deontology, and virtue ethics. When definitions of “positive” do not align with one of these ethical schools, it appears researchers rely on preference to distinguish positive attributes. In either case, issues arise when researchers do not make their theoretical alignment explicit, leading to value-laden, often subjective criteria being smuggled into science as a description of what is positive.",
        pdfLink: "https://onlinelibrary.wiley.com/doi/10.1111/jopy.12873",
        doiLink: " https://doi.org/10.1111/jopy.12873",
        featured: false
    },
    {
        id: "pub5",
        title: "Character Traits Predict Health and Well-Being beyond Personality",
        authors: "Danielle Wilson, Vincent Ng, Jeff Foster, and Louis Tay",
        year: 2023,
        journal: "Neural Information Processing Systems (NeurIPS)",
        abstract: "We examined the incremental validity of character in predicting health outcomes and well-being beyond personality traits and investigated the extent to which health-related behaviors mediate the relationship between character and well-being. Findings indicate that several character cores (e.g., transcendence, fortitude) predict well-being, health behaviors, and health outcomes beyond different measures of personality traits, indicating that character is discriminable from personality as indicated by incremental prediction. In particular, fortitude, temperance, transcendence, and sincerity appear to be key players. Implications for character research are discussed.",
        pdfLink: "https://www.tandfonline.com/doi/pdf/10.1080/00223891.2023.2197064?casa_token=SEfnXa5SZd4AAAAA:DH_E-YfTfKpEjv8kJP8EEa190idI7rzIP6Rk9usB32ItPBnuo6DLgV2zMEXw_ZYzZL3gbEtB5Sn2Oow",
        doiLink: "https://www.tandfonline.com/doi/full/10.1080/00223891.2023.2197064?scroll=top&needAccess=true",
        featured: false
    },
    {
        id: "pub6",
        title: "Lost in Translation: The Construct Representation of Character Virtues",
        authors: " Vincent Ng and Louis Tay",
        year: 2020,
        journal: "Sage Journals Home",
        abstract:"A seemingly universal lesson is that anything taken to its extreme is detrimental. Indeed, there has been growing interest in testing this idea within psychology. These studies have often been framed in terms of Aristotle’s doctrine of the golden mean or the idea that virtue lies between the vices of deficiency and excess. Recent explicit reviews of this hypothesis in the psychological literature have led to the paradoxical conclusion that one can have too much virtue (i.e., the too-much-of-a-good-thing effect) despite virtue being identified by the golden mean. We argue in this article that this conclusion is due to a reductionist account of virtues in psychology and the resultant measurement of virtues as general dispositional tendencies in behavior. We review philosophical theory on the golden mean to show that the relationship between virtue and relevant behavior is fundamentally about situation-specific optimality. Using schematic models, we contrast the former measurement approach against the latter to explain the too-much-of-a-good-thing effect and further demonstrate why virtues cannot be properly measured as general tendencies in behavior. We conclude with methodological implications of our theory-informed approach to virtue measurement for research design, evaluation, and conceptualization.",

        pdfLink: "https://journals.sagepub.com/doi/pdf/10.1177/1745691619886014?casa_token=ee30_FHFxmAAAAAA:28krNx2PbOJrhXE_3dYGKVwXd6Ig-t0Gu3uXiTydGmD2p9rfVBumZ1DLFIhiIX79QvNm9TBfEq4WHLI",
        doiLink: "https://doi.org/10.1177/1745691619886014",
        featured: false
    },
  {
        id: "pub7",
        title: "Behavioral measures of humility: Part 1. Theoretical and methodological review",
        authors: "Daryl R. Van Tongeren, Vincent Ng, Louis Hickman, and Louis Tay",
        year: 2022,
        journal: "The Journal of Positive Psychology",
        abstract: "Research on humility has burgeoned. However, behavioral assessments of humility that do not relyon self-reports have developed much more slowly. The purpose of this paper is to take stock ofexisting approaches to conceptualize and measure humility. Specifically, we provide a conceptualoverview of humility, including the limitations of current methodological approaches to studyinghumility and the need for behavioral assessments. In addition, we argue that behavioral assess-ments of humility may inform broader measures of virtues by considering both the relevance ofand the degree to which actual behaviors pertaining to that virtue are expressed. Understandingthe current conceptual and methodological limitations of approaches to humility will better situateresearch efforts aimed at catalyzing behavioral measures of humility.",
        pdfLink: "https://www.tandfonline.com/doi/epdf/10.1080/17439760.2022.2109202?needAccess=true",
        doiLink: "https://doi.org/10.1080/17439760.2022.2109202",
        featured: false
    },
  {
        id: "pub8",
        title: "Behavioral measures of humility: Part 2. Conceptual mapping and charting ways forward",
        authors: "Daryl R. Van Tongeren, Vincent Ng, Louis Hickman, and Louis Tay",
        year: 2022,
        journal: "The Journal of Positive Psychology",
        abstract: "Given that current methodological approaches to humility have largely ignored behavioral mea-sures, we sought to provide a conceptual map of behavioral assessments. Toward that end, weoffer an initial map of conceptual bases and likely indicators for behavioral assessments of humility,and suggest a research agenda for advancing the scientific study of humility. Specifically, wediscuss the four features of behavioral measures – scalability, specificity, sensitivity, and selectivity –that offer such assessments a great advantage over other methodological approaches. In addition,we make three empirically testable propositions, addressing methodological alignment, domainspecificity, and social desirability, and discuss potential behavioral interventions for cultivatinghumility and implications for research and practice. We hope this empirically testable frameworkwill provide a fruitful way for researchers to better conceptualize and measure humility.",
        pdfLink: "https://www.tandfonline.com/doi/epdf/10.1080/17439760.2022.2109201?needAccess=true",
        doiLink: "https://doi.org/10.1080/17439760.2022.2109201",
        featured: false
    }
    // TO ADD MORE PUBLICATIONS:
    // Copy an entry, paste here, and modify the details
    // Don't forget the comma after the closing }
];

// ============================================================================
// SCIENTIFIC ADVISORS
// ============================================================================
// To add a new advisor, copy an entry and modify the details

const scientificAdvisors = [
    {
        id: "advisor1",
        name: "Sonja Lyubomirsky",
        title: "Scientific Expert",
        affiliation: "University of California, Riverside",
        image: "images/advisors/SonjaLyubomirsky.jpg",
        bio: "Sonja Lyubomirsky (AB Harvard, summa cum laude; PhD Stanford) is Distinguished Professor of Psychology at the University of California, Riverside and author of the best-selling The How of Happiness and The Myths of Happiness (published in 39 countries). Lyubomirsky’s research—on the possibility of lastingly increasing happiness via gratitude, kindness, and connection interventions—have been the recipients of many grants and honors, including Fellow of the American Association for the Advancement of Science (AAAS), an Honorary Doctorate from the University of Basel, the Diener Award for Outstanding Midcareer Contributions in Personality Psychology, the Christopher Peterson Gold Medal, a Positive Psychology Prize, and the Faculty of the Year Award (twice). She has four kids, ages 12 to 26, and lives in Santa Monica, California.",
        expertise: "Positive psychology, happiness research, gratitude and kindness interventions, well-being science",
        contributions: "Fellow of the American Association for the Advancement of Science (AAAS), Honorary Doctorate from the University of Basel, Diener Award for Outstanding Midcareer Contributions in Personality Psychology, Christopher Peterson Gold Medal, Positive Psychology Prize, Faculty of the Year Award (twice). Author of The How of Happiness and The Myths of Happiness."
    },
    {
        id: "advisor2",
        name: "Tara Behrend",
        title: "Scientific Expert",
        affiliation: "Michigan State University",
        image: "images/advisors/behrend-tara.jpg",
        bio: "Tara Behrend is the John R Butler II Endowed Professor of Human Resources and Labor Relations at Michigan State University, where she leads the MSU Future of Work Initiative. Her research focuses on the effects of emerging technologies on the experience of work. She has published extensively on the topics of AI, surveillance, learning, and human-computer-interaction.She serves in multiple national leadership and advisory roles, including as Chair of APA’s Board on Scientific Affairs and as member of the National Academies Board on Human-Systems Integration. She is a former Program Director for the National Science Foundation, overseeing the Science of Organization and Future of Work programs. Her most recent edited book, Human-Technology Partnerships at Work, was published with Cambridge in September 2025.",
        expertise: "Future of work, AI and emerging technologies, human-computer interaction, surveillance technologies, organizational psychology",
        contributions: "Chair of APA's Board on Scientific Affairs, member of the National Academies Board on Human-Systems Integration, former Program Director for the National Science Foundation overseeing Science of Organization and Future of Work programs. Editor of Human-Technology Partnerships at Work (Cambridge, 2025)."
    },
    {
        id: "advisor3",
        name: "Lyle Ungar",
        title: "Scientific Expert",
        affiliation: "University of Pennsylvania",
        image: "images/advisors/LyleUngar.jpg",
        bio: "Lyle Ungar is a Professor of Computer and Information Science at the University of Pennsylvania, where he also holds secondary appointments in Psychology, Bioengineering, Genomics and Computational Biology, and Operations, Information and Decisions. His group uses natural language processing and explainable AI for psychological research, including analyzing social media and cell phone sensor data to better understand the drivers of physical and mental well-being and building socio-emotionally sensitive AI-based tutors and coaches.",
        expertise: "Natural language processing, explainable AI, affective computing, well-being analytics, AI tutors and coaches",
        contributions: "Pioneering work in using NLP and AI for psychological research, development of socio-emotionally sensitive AI systems, research on well-being drivers through social media and sensor data analysis."
    },
    {
        id: "advisor4",
        name: "Chris Burr",
        title: "Scientific Expert",
        affiliation: "The Alan Turing Institute",
        image: "images/advisors/ChrisBurr.jpeg",
        bio: "Dr Christopher Burr is a Senior Researcher in Trustworthy Systems at the Alan Turing Institute—the UK’s national institute for data science and artificial intelligence. Dr Burr specialises in the trustworthy and ethical design, development, and deployment of data-driven technologies. He is also interested in exploring and understanding how data-driven technologies affect our decision-making and social institutions (e.g. factors that undermine trust in algorithmic systems).He is project lead for the Trustworthy and Ethical Assurance programme, and the Turing Commons. He is also co-lead for a work package on the EPSRC Networks of Cardiovascular Digital Twins (CVDNet) project, and the lead for the Uncertainty and Trust Special Interest Group (UKRI DTNet+).",
        expertise: "Trustworthy AI, ethical AI design, AI governance, algorithmic trust, data ethics",
        contributions: "Project lead for the Trustworthy and Ethical Assurance programme and the Turing Commons. Co-lead for EPSRC Networks of Cardiovascular Digital Twins work package. Lead for the Uncertainty and Trust Special Interest Group."
    },
    {
        id: "advisor5",
        name: "Rafael Calvo",
        title: "Scientific Expert",
        affiliation: "Imperial College London",
        image: "images/advisors/RafaelCalvo.jpeg",
        bio: "Rafael Calvo is Professor and Chair of Engineering Design at Imperial College London. He focuses on systems for learning, wellbeing, and health. In the late 2000s, Calvo was amongst those who pioneered the field of Affective Computing, focusing on affect detection. His work included review articles and the Oxford Handbook of Affective Computing (Calvo 2010, Calvo 2015). Calvo then led the way for a new field of “Positive Computing” (Calvo 2014) – approaches to design that support motivation and psychological well-being. His work translating empirical and theoretical work in motivational psychology to design has been applied worldwide by scholars and companies alike. He is currently developing text and voice agents for chronic illness, mental health, and dementia.",
        expertise: "Positive Computing, affective computing, well-being technology, learning systems, health technology",
        contributions: "Pioneer in Affective Computing and founder of Positive Computing field. Editor of Oxford Handbook of Affective Computing. Current work on AI agents for chronic illness, mental health, and dementia care."
    },
    {
        id: "advisor6",
        name: "Fred Oswald",
        title: "Scientific Expert",
        affiliation: "Rice University",
        image: "images/advisors/FredOswald.jpg",
        bio: "Fred Oswald is an industrial-organizational psychologist and current Chair of the Board on Human Systems Integration (BOHSI) at the National Academies, where they recently published a highly downloaded report, Human-AI Teaming: State of the Art and Research Needs (Mica Endsley, Chair). He is a current Member of the National Artificial Intelligence Advisory Committee (NAIAC) which advises the President and the Secretary of Commerce on a wide range of topics relevant to AI and national prosperity. With consistent PI and co-PI funding from NSF, NIH, and other agencies, his core research addresses the role of AI and machine learning in work and workforce settings.",
        expertise: "Industrial-organizational psychology, human-AI teaming, AI in workforce settings, human systems integration",
        contributions: "Chair of National Academies Board on Human Systems Integration. Member of National AI Advisory Committee. Led publication of 'Human-AI Teaming: State of the Art and Research Needs' report."
    },
    {
        id: "advisor7",
        name: "Richard Zemel",
        title: "Scientific Expert",
        affiliation: "Columbia University",
        image: "images/advisors/Richard Zemel.png",
        bio: "Richard Zemel is the Trianthe Dakolias Professor of Engineering and Applied Science in the Computer Science Department at Columbia University. He is the Director of the NSF AI Institute for Artificial and Natural Intelligence (ARNI), and was the co-founder and inaugural Research Director of the Vector Institute for Artificial Intelligence. He is a Canadian Institute for Advanced Research AI Chair and is on the Advisory Board of the Neural Information Processing Society. His awards include an AI Lifetime Achievement Award (CAIA) and a Pioneer of AI Award (NVIDIA). His research contributions include foundational work on systems that learn useful representations of data with little or no supervision; graph-based machine learning; and algorithms for fair and robust machine learning.",
        expertise: "Machine learning, representation learning, graph-based ML, fair and robust ML, neural networks",
        contributions: "AI Lifetime Achievement Award (CAIA), Pioneer of AI Award (NVIDIA). Director of NSF AI Institute for Artificial and Natural Intelligence. Co-founder of Vector Institute. Foundational work on unsupervised learning and fair ML algorithms."
    },
    {
        id: "advisor8",
        name: "Munmun De Choudhury",
        title: "Scientific Expert",
        affiliation: "Georgia Institute of Technology",
        image: "images/advisors/DeChoudhury.jpeg",
        bio: "Munmun De Choudhury is J. Z. Liang Professor at the School of Interactive Computing and Co- Lead of Patient-Centered Care Delivery at the Pediatric Technology Center in Georgia Institute of Technology. Dr. De Choudhury is known for her contributions to the fields of computational social science, human-computer interaction, and digital mental health. Dr. De Choudhury and her collaborators have contributed significantly to advancing the development of computational techniques for early detection and intervention in mental health, as well as in unpacking how social media use benefits or harms mental well-being. De Choudhury's contributions have been recognized through awards like the 2023 SIGCHI Societal Impact Award, the 2023 ICWSM and the 2022 Web Science Trust Test-of-Time Awards, and the 2021 ACM-W Rising Star Award. In 2024, she was inducted into the SIGCHI Academy. Dr. De Choudhury is a persistent contributor to policy-framing and advocacy initiatives, and is frequently sought for expert advice to governments, and national and international media. Notably, Dr. De Choudhury was an invited contributor to the Office of U.S. Surgeon General’s 2023 Advisory on The Healing Effects of Social Connection. Recently, she served as a member of the Technical Advisory Group of the Commission for Social Connection at the World Health Organization.",
        expertise: "Computational social science, digital mental health, social media and well-being, HCI, mental health detection and intervention",
        contributions: "2023 SIGCHI Societal Impact Award, 2023 ICWSM and 2022 Web Science Trust Test-of-Time Awards, 2021 ACM-W Rising Star Award. Inducted into SIGCHI Academy in 2024. Contributor to U.S. Surgeon General's 2023 Advisory on Social Connection. Member of WHO Commission for Social Connection Technical Advisory Group."
    },
    {
        id: "advisor9",
        name: "Dorian Peters",
        title: "Scientific Expert",
        affiliation: "University of Cambridge",
        image: "images/advisors/Dorian Peters.png",
        bio: "Dorian is Assistant Professor in Ethical Design at The University of Cambridge Institute for Technology and Humanity. She is also a Visiting Researcher at the Dyson School of Design Engineering at Imperial college London and a Senior Research Associate at the Intellectual Forum, Jesus College Cambridge. She is a human-computer interaction researcher who specialises in digital health and on design for wellbeing, autonomy and learning. She has worked in participatory digital health and mental health across age groups with communities in the UK, Australia, and Latin America. Her current interests are on ethical front-end design and design for ‘whole-person digital health’ that takes into account the psychological dimensions of physical illness.Her books include: Positive Computing: Technology for Wellbeing and Human Potential (MIT Press), and Interface Design for Learning (Pearson). She is also on the editorial board of the Springer Nature journal, AI & Ethics. Previously she held the positions of Research Fellow at Imperial College London and until 2024, she was Associate Director of the Leverhulme Centre for the Future of Intelligence at the University of Cambridge. Until 2019, she was Creative Leader of the Wellbeing Technologies Lab at the University of Sydney. With over 20 years’ experience in technology design, she works together with communities, engineers, and social scientists to co-create human-centered, context-sensitive and research-driven technologies in ways that respect psychological needs. She has also done work for non-profit and corporate institutions, including Movember Foundation, IESO Digital Health, Google, Atlassian, Honda, Sony, and Phillips. She received her PhD in Interaction Design from the University of Sydney and Bachelor’s from Carnegie Mellon. Her contributions in human-computer interaction include the “METUX model” for evaluating the wellbeing impact of technologies within six spheres of human experience and the 15 Wellbeing Supportive Design Heuristics.",
        expertise: "Ethical design, digital health, HCI, well-being design, design for autonomy and learning, whole-person health",
        contributions: "Co-author of Positive Computing: Technology for Wellbeing and Human Potential (MIT Press) and Interface Design for Learning (Pearson). Editorial board of AI & Ethics journal. Former Associate Director of Leverhulme Centre for the Future of Intelligence. Developer of METUX model for evaluating wellbeing impact of technologies and 15 Wellbeing Supportive Design Heuristics."
    },
    {
        id: "advisor10",
        name: "Geke Ludden",
        title: "Scientific Expert",
        affiliation: "University of Twente",
        image: "images/advisors/GekeLudden.avif",
        bio: "As professor Geke Ludden is the head of the UT’s Interaction Design research group within the faculty of Engineering Technology (ET), and as a fellow she is linked to the UT’s DesignLab. Ludden has worked as a UT lecturer and researcher since 2012. She has also been a visiting research fellow at the University of Technology in Sydney. Before that, Ludden worked as a research consultant with the Novay Research Rnstitute. Her research work has been published in design and health care journals. She is co-editor of the Design for Behaviour Change Handbook (September 2017, Routledge) and editor of the Journal of Design Research. Ludden has a background in industrial design and gained her PhD at Delft University of Technology in 2008, having gained her Master’s in Industrial Design Engineering at the same university in 2003.",
        expertise: "Design for behavior change, well-being, mental health, value-based design",
        contributions: "Head of Interaction Design research group in Engineering Technology faculty and lecturer at University of Twente. Co-Editor of Design for Behavior Change Handbook and Editor of Journal of Design Research."
    }
    ];

// ============================================================================
// BLOG POSTS
// ============================================================================
// To add a new blog post, copy an entry and change the information

const blogPosts = [
    {
        id: "post1",
        title: "Character Virtues and Artificial Intelligence: WHY NOT BOTH?",
        author: "Rediet Shiferahu",
        date: "3/11/2026",
        category: "Psychology",
        excerpt: "Artificial intelligence is now part of our everyday lives. It answers our questions, offers advice, provides emotional support, and shapes how we learn, work, and handle stress. But a deeper question is beginning to emerge: How do these technologies shape the kinds of people we become over time?",
        content: `
         <h3 style="color: #2d7a4f;">AI Beyond Efficiency: Why Flourishing Matters</h3>

         <p>Artificial intelligence is now part of our everyday lives.</p>

        <p>It answers our questions, offers advice, provides emotional support, and shapes how we learn, work, and handle stress. As conversational AI systems become more personal and more present, discussions about their ethical design have expanded beyond concerns about bias, privacy, or accuracy. But a deeper question is beginning to emerge:</p>

        <p><strong>How do these technologies shape the kinds of people we become over time?</strong></p>

        <p>Most AI systems today are built to optimize short-term outcomes, to be responsive, agreeable, and immediately helpful. That's not a small thing. When you are stressed or overwhelmed, timely support genuinely matters. But is feeling better right now the same as flourishing?</p>

        <p>And is flourishing the same thing as immediate satisfaction?</p>

        <p>Psychological and philosophical research alike suggests that well-being unfolds across time, shaped by patterns of behavior. By habits of attention-what individuals learn to notice in themselves, in others, in the world and by the gradual development of character.</p>

        <p>If flourishing is long-term, developmental, and relational, then should our technologies be evaluated the same way?</p>

        <h3>What Are Character Virtues?</h3>

        <p>Character virtues are enduring capacities that guide how individuals think, feel, and act in relation to themselves and others. Qualities such as patience, self-control, kindness, and generosity are not fixed traits, nor are they ideals of moral perfection. Drawing on Aristotle's account of virtue, they are cultivated through repeated practice and reflection, often in contexts that require effort, restraint, or care for others.</p>

        <p>Virtues develop slowly. They require friction, time, discomfort and attention. These virtues support long-term well-being precisely because they help individuals navigate difficulty, sustain relationships, and orient themselves toward meaningful goals. Which raises an uncomfortable question: What happens when technologies built for immediacy run into processes that, by nature, require time?</p>

        <h3>The Tension Between Immediacy and Growth</h3>

        <p>Patience develops when individuals remain frustrated rather than escaping it. Self-control develops when you notice an impulse and choose not to act on it immediately. Kindness and generosity grow through sustained attention to others, not through substitution or withdrawal.</p>

        <p>When AI systems are consistently designed to remove friction, speed up reflection, or replace real human engagement, they can quietly undermine the very conditions in which these virtues take root.</p>

        <p>Is convenience always neutral? Or can it slowly reshape our habits of thought and action without us noticing?</p>

        <p>This isn't an argument that AI is inherently at odds with character development. Rather, it's about design choices and what we choose to measure. If we only evaluate AI systems by how pleasant or helpful they feel in the moment, we're leaving their longer-term effects on agency, responsibility, and relationships completely unexamined. Over time, that gap can encourage patterns of overreliance or diminished self-regulation, especially when AI becomes a default source people turn for guidance or emotional reassurance.</p>

        <h3>From User Satisfaction to Virtue-Oriented Design</h3>

        <p>A virtue-oriented approach to AI asks different questions. Instead of focusing exclusively on whether users feel satisfied right now, it asks: do these interactions support reflective engagement, autonomy, and ethical awareness over time? This kind of approach recognizes that discomfort is not always something to be eliminated, and that real growth often involves pauses, questions, and sustained effort. AI systems designed with these principles in mind may prompt users to reflect rather than react, to consider others rather than retreat inward, and to develop habits aligned with long-term flourishing.</p>

        <p>Designing AI around character virtues does not mean encoding moral rules into machines or prescribing how individuals ought to live. Rather, it involves acknowledging that technologies actively shape human behavior and committing to shaping that influence in ways aligned with virtue-based frameworks and individuals' own long term goals.</p>

        <p>This responsibility rests with those who design, deploy and evaluate AI systems, and with the constraints and accountability structures built into them. Fulfilling this responsibility requires interdisciplinary work, drawing on psychology to understand developmental processes, philosophy to clarify ethical commitments, and computer science to implement and test systems responsibly.</p>

        <img src="images/blog/Picture2.png" alt="AI and human flourishing illustration" style="width:100%; margin: 20px 0;" />

        <h3>We Have to Measure What Actually Matters</h3>

        <p>And it requires honest, rigorous evaluation.</p>

        <p>Short-term engagement metrics such as responsiveness, user satisfaction, or perceived helpfulness cannot capture whether an AI system supports or undermines character development. These metrics often reward systems for saying what users want to hear, minimizing effort, or offering easy solutions, even when such interactions discourage reflection, self-regulation, or meaningful connection with others.</p>

        <p>That's why longitudinal research matters. We need to understand how repeated AI interactions shape patterns of thought, emotion, and behavior across time, not just in the moment after a conversation ends. Ethical AI design has to be evidence-based, attentive to unintended consequences, and open to revision as new insights emerge. If we do not measure long-term character effects, we won't know what we are building?</p>

        <h3>AI, Character and the Future We're Creating</h3>

        <p>As AI becomes increasingly integrated into the intimate spaces of human life, questions of character and virtue are no longer peripheral. They are central to what it means to design technology that genuinely serves human flourishing.</p>

        <p>The measure of success cannot rest solely on how seamless or human-like these systems appear. It must also consider whether they support the slow, imperfect, and relational processes through which people grow.</p>

        <p>The future of AI will not be defined only by what it can do technically. It will be shaped by the values embedded in its design and the forms of life it quietly encourages. Explicitly orienting AI design toward character virtues provides a way to align technological innovation with enduring human values, ensuring that AI becomes more present in our lives, it remains grounded in the virtues that support long-term well-being, agency and human flourishing.</p>

        <p>If AI increasingly mediates how we think, decide, and relate, then the question is no longer whether it influences human development. The question is: Will it be designed to cultivate the virtues that sustain long-term well-being, agency, and human flourishing?</p>
    `,
        image: "images/blog/Picture1.png",
        featured: true
    },
    {
        id: "post2",
        title: "Technical Challenges in Virtue-Centered AI",
        author: "",
        date: "",
        category: "Technology",
        excerpt: "A deep dive into the architectural considerations necessary for building AI systems that promote character development. From reward modeling to long-term optimization.",
        content: `
            <p>Building AI systems that promote character virtues presents unique technical challenges that differ significantly from traditional AI optimization problems.</p>
            
            <h3>The Temporal Credit Assignment Problem</h3>
            <p>One of the fundamental challenges is that the "rewards" from character development are often delayed and indirect. While a short-term AI might optimize for immediate user satisfaction (easy to measure), a virtue-centered AI needs to optimize for outcomes that may not manifest for months or years.</p>
            
            <h3>Multi-Objective Optimization</h3>
            <p>Character development isn't a single metric – it involves balancing multiple virtues, each of which may sometimes be in tension. Our technical approach involves developing neural architectures that can handle these complex trade-offs.</p>
            
            <h3>Value Learning from Multiple Sources</h3>
            <p>Rather than learning values from user engagement alone, our systems integrate insights from psychological research, philosophical frameworks, and behavioral observations to create a more robust understanding of what promotes flourishing.</p>
        `,
        image: "images/blog/tory (1).png",
        featured: true
    },
    {
        id: "post3",
        title: "When AI Enters Our Most Intimate Spaces",
        author: "Rediet Shiferahu",
        date: "3/12/2026",
        category: "Psychology",
        excerpt: "Artificial intelligence is no longer confined to productivity tools or information retrieval. It is moving into something far more personal: our emotional lives, our relationships, and increasingly, our most intimate spaces. This shift raises questions that are not only technological, but deeply human.",
        content: `
        <p>Artificial intelligence is no longer confined to productivity tools or information retrieval. It is moving into something far more personal: our emotional lives, our relationships, and increasingly, our most intimate spaces. AI systems are now used for romantic companionship, simulated relationships, personalized adult content, and forms of emotional connection that unfold entirely without another human being present. This shift raises questions that are not only technological, but deeply human.</p>

        <p>What happens when desire, intimacy, and emotional attachment become mediated by systems that have no needs, no vulnerability, and no agency of their own? When faced with that question, it's tempting to jump straight to a verdict.</p>

        <p>Some frame AI intimacy as liberation as a safer, more accessible form of connection. Others frame it as moral decline, a symptom of society retreating from the difficulty of real relationships. Both reactions are understandable. Neither is particularly useful on its own.</p>

        <p>For example, AI generated adult content is expanding rapidly. Some systems allow users to generate personalized fantasies on demand. Others simulate ongoing romantic or sexual relationships, tailored to individuals' preferences, and refined over time. In this interaction, there is no rejection, no negotiation, and no need to consider another person's boundaries, emotions, or desires. For some people, this genuinely feels safer or more convenient. However, that experience deserves to be taken seriously rather than dismissed. Human sexuality and intimacy have historically involved more than gratification. They involved mutuality, responsibility, and relational complexity. The messy, sometime uncomfortable process of encountering another person who is not fully shaped to your preferences.</p>

        <p>So, when AI removes that interpersonal dimension entirely, the question isn't simply whether the experience feels satisfying in the moment. The deeper question is what habits are formed through repeated interaction. Does frictionless gratification gradually reshape expectations in real-world relationships? Does it alter how people approach vulnerability or compromise?</p>

        <p>These aren't accusations. They're developmental questions and they're worth sitting with.</p>

        <img src="images/blog/Picture4.png" alt="Romantic attachment illustration" style="width:100%; margin: 20px 0;" />

        <h3>Romantic Attachment Without Reciprocity</h3>

        <p>Some users report forming genuine emotional bonds with AI companions. They describe feeling understood, affirmed, and listened to it without judgment. Those experiences shouldn't be waved away. But human attachment typically develops through something AI can't replicate reciprocity. Real intimacy grows through navigating misunderstanding, tolerating ambiguity, and repairing conflict. It requires mutual vulnerability, not one-sided adaptation.</p>

        <p>However, AI companionship introduces something genuinely new. The interaction feels responsive and personal, yet it doesn't involve another conscious agent with independent needs, moods, or limits. It's designed to work for you, always. And that's precisely what makes it worth examining carefully.</p>

        <p>Research on parasocial relationships the one-sided bonds people form with celebrities, fictional characters, or online personalities suggests that these connections can shift expectations about real ones. AI companions extend this dynamic considerably, adding personalization, memory, and the texture of ongoing interaction. Whether this fundamentally alters long-term attachment patterns is still an open question.</p>

        <p>But the fact that we don't have a definitive answer yet is not the same as saying the answer doesn't matter.</p>

        <h3>The Role of Friction</h3>

        <img src="images/blog/Picture5.png" alt="The role of friction illustration" style="width:100%; margin: 20px 0;" />

        <p>Human relationships involve limits, negotiation, disappointment, accountability, and sometimes guilt, shame, and the slow work of repair. These experiences aren't pleasant, but they tend to be where moral development and character happen.</p>

        <p>For example, when another person has needs separate from your own, you're required to adjust, to restrain impulses, to consider the consequences and that friction isn't a flaw in relationships. In many ways, it's the point!</p>

        <p>So, AI systems designed for intimacy can remove most of these constraints by design. A system can be built to adapt entirely to one user's preferences. It can avoid conflict. It can provide affirmation without challenge, comfort without cost. The question is whether that absence of friction simply creates a new form of interaction or whether, over time, it quietly erodes the very capacities that make real relationships possible: patience, self-control, empathy, responsibility.</p>

        <img src="images/blog/Picture6.png" alt="Can we stop AI illustration" style="width:100%; margin: 20px 0;" />

        <h3>Can We Stop AI?</h3>

        <p>Probably not, and that's not really the question worth asking.</p>

        <p>AI development in these domains isn't going to pause while society catches up. The more realistic question is whether individuals and institutions can approach these technologies with enough awareness to make deliberate choices about them rather than simply absorbing their effects without noticing.</p>

        <p>New technologies have a way of normalizing themselves before we've fully thought about what they're doing to us. By the time ethical debates mature, behavioral patterns are often already established. We saw this with social media. By the time researchers had longitudinal data on its effects on adolescent mental health, hundreds of millions of teenagers had already spent years inside systems optimized for engagement, not wellbeing.</p>

        <p>The more pressing issue here isn't prohibition but formation. How do repeated interactions with AI-mediated intimacy shape long-term expectations about love, sexuality, partnership, and commitment? And are the people building these systems thinking about that question at all?</p>

        <p>This conversation does require seriousness.</p>

        <p>AI is no longer only a tool for efficiency. It is increasingly woven into emotional and relational life. When technology enters domains historically defined by vulnerability, embodiment, and reciprocity where character is formed over time, the stakes are different than they are for a faster search engine or a better spreadsheet. And we don't yet have sufficient longitudinal research to determine the long-term relational effects of AI-mediated intimacy. But the absence of complete data doesn't mean the absence of impact. If AI shapes habits, and habits shape character, then its deepening presence in intimate life deserves careful, honest reflection. As well as understanding, as clearly as we can, what kind of relational world we are quietly building and whether that's actually the world we want.</p>
        `,
        image: "images/blog/Picture3.png",
        featured: true
     },
    {
        id: "post4",
        title: "Aristotle Meets Machine Learning",
        author: "",
        date: "",
        category: "Philosophy",
        excerpt: "How ancient philosophical wisdom can inform modern AI design for promoting human excellence. Bridging classical virtue ethics and contemporary technology.",
        content: `
            <p>Aristotle's concept of eudaimonia – often translated as "flourishing" or "living well" – provides a surprisingly relevant framework for thinking about AI development in the 21st century.</p>
            
            <h3>Virtue as Skill Development</h3>
            <p>For Aristotle, virtues are not innate qualities but skills that must be developed through practice and habituation. This has direct implications for how we design AI interactions – they should provide opportunities for practicing virtuous responses, not just delivering pleasant experiences.</p>
            
            <h3>The Golden Mean</h3>
            <p>Aristotle's concept of virtue as a mean between extremes is particularly relevant for AI design. An AI focused on building courage, for instance, shouldn't push users toward recklessness nor allow them to remain in excessive caution, but help them find the appropriate middle path.</p>
            
            <h3>The Role of Community</h3>
            <p>Ancient philosophy recognized that virtue development happens in community. Our challenge is to design AI systems that enhance rather than replace human relationships and communal sources of meaning.</p>
        `,
        image: "images/blog/tory.png",
        featured: true
    },
    {
    id: "post5",
    title: "Can AI Make You a Better Person? The Harder Question Nobody Is Asking",
    author: "Rediet Shiferahu",
    date: "6/25/2026",
    category: "Psychology",
    excerpt: "The AI industry is extraordinarily good at answering questions. But here is the question that tends to get left out: can AI make you a genuinely better person? Not more efficient. Not measurably happier on a self-report survey. A better person in the fullest sense.",
    content: `
        <img src="images/blog/blog4.png1" alt="Can AI Make You a Better Person" style="width:100%; margin-bottom: 20px; border-radius: 8px;" />

        <p>The AI industry is extraordinarily good at answering questions.</p>

        <p>Can AI make you more productive? Yes. Can it reduce friction in your day, summarize your inbox, help you write faster, and give you information you once had to search for? Absolutely. Can it provide a kind of emotional support that feels attentive, patient, and available at any hour? In many cases, yes. But here is the question that tends to get left out: can AI make you a genuinely better person? Not more efficient. Not measurably happier on a self-report survey. A better person in the fullest sense, more patient, more honest, more generous, more capable of showing up for others even when it costs you something. A person whose character, over time, actually develops.</p>

        <p>This is the question Florea AI is trying to answer. And the more seriously we take it, the more we realize how much the current AI landscape is built on assumptions that work against it.</p>

        <h3>The Problem Is Not What AI Does. It Is What AI Is Trained to Do.</h3>

        <p>Start with something that is easy to miss because it sounds technical: current AI systems are trained to produce responses that users rate highly. This is how reinforcement learning from human feedback works. Humans annotate model outputs as more or less preferred, and the model learns from these training datasets to produce responses that align with those preferences. The problem is what humans rate highly. They rate responses that feel good and validate them. Responses that agree with them, affirm their perspective, and resolve their discomfort quickly. This is not a moral failure on our part; it is a natural tendency of human psychology. We like being understood. We like hearing that we are right. We like having our frustrations acknowledged and our questions answered. But this creates a structural problem for character development, because character is almost never developed through comfort.</p>

        <p>Patience is not built by removing inconvenience. It is built by experiencing inconvenience and choosing, repeatedly and with difficulty, to respond with grace. Self-control is not developed by eliminating temptation. It is developed by encountering it, resisting it, and sometimes failing. Honesty is not strengthened by environments that reward telling people what they want to hear. It is forged through the experience of saying the hard thing and living with the consequences.</p>

        <p>What researchers call desirable difficulties: friction, challenge, productive discomfort are not obstacles to character development. They are the mechanism of it. AI systems trained on approval signals are structurally designed to smooth all of it away. These systems tend to avoid telling users they are wrong. They find something affirming to say. They produce the feeling of being heard and supported. They are remarkably good at making people feel better. And that is precisely what makes them, in their current form, poorly suited for the deeper work of making people better.</p>

        <h3>An Answer Machine Is Not a Coach</h3>

        <p>There is a deeper version of this problem that has to do with what AI is fundamentally built to be.</p>

        <p>Current AI chatbots function like an answer machine. You bring it a question, and it produces an answer. You bring it a task, and it completes the task. The entire architecture and the entire expectation users bring to it is oriented around resolution. Something is unclear; the AI clarifies it. Something is hard; the AI simplifies it. Something needs to be written, planned, or figured out; the AI does it.</p>

        <p>A coach operates on a completely different principle.</p>

        <p>A good coach does not give you the answer. A good coach asks the question that helps you find it yourself. A good coach creates conditions for you to struggle productively rather than removing the struggle. A good coach tells you when you are taking the easy road rather than the right one. Sometimes a good coach says nothing at all and sits with the silence, because silence can be more honest and more useful than any response. None of this comes naturally to a system that is rewarded for producing preferred answers. The gap between what current AI does and what genuine coaching for character development requires is not simply a matter of better prompts or more sophisticated fine-tuning. It is a gap in the fundamental purpose of the tool itself. Current AI is built to resolve, but character development requires sustained, productive tension. These are fundamentally different goals and conflating them is one of the most important mistakes the AI developers and researchers are currently making.</p>

        <p>What would it actually mean to redesign AI for character development rather than for problem resolution? It would mean asking a different question from the start: Instead of what response would the user rate most highly right now, what response best serves the person they are trying to become overtime? That is a harder alignment target. But it is the right one.</p>

        <h3>The Quiet Cost of What Gets Replaced</h3>

        <p>Here is something that rarely appears in the conversation about AI and well-being: a discussion of what AI use replaces. When someone turns to an AI conversational agent for emotional support, they are choosing not to turn to a friend, a family member, or a therapist, often without realizing it. When they rely on AI to find the words for a difficult message, they are not sitting with the discomfort of searching for those words themselves. When they outsource a moral dilemma to AI, they are not building the slow, uncertain, essential muscle of independent moral reasoning. These substitutions are not obviously bad. The support is real, the message gets written, and the dilemma gets addressed. In the short term, the experience is often positive. But what happens over the weeks, months, and years of repeated substitution?</p>

        <p>Research on chatbots and loneliness points to something troubling: using chatbots to alleviate loneliness can actually increase loneliness over time. Not because the AI interaction was harmful in itself, but because it substituted for the harder, messier, more demanding work of human connection, and that work is precisely what builds the social skills and bonds that protect against loneliness in the first place. The short-term relief is real. The long-term erosion is quieter, slower, and more difficult to see. This is the substitution problem and it runs through almost every domain of character development: the gratitude that deepens through the effort of expressing it honestly in your own words, the empathy that develops through the discomfort of listening to someone without knowing what to say and the patience that grows through the accumulated experience of waiting, without complaint, in situations that matter. These capacities are built through practice in real conditions and every time AI substitutes for the practice, the opportunity for growth disappears with it.</p>

        <p>There is an important distinction that is easy to collapse. AI that helps you act on a virtuous intention is doing something different from AI that acts in place of you. If AI helps you turn a vague desire to be generous into a specific, concrete action, such as finding a cause, making a plan, reducing the gap between wanting to do good and actually doing it, then that is genuinely valuable. The act can reinforce your sense of yourself as a generous person, which over time shapes who you become. But if AI writes the thank-you letter for you, plans the act of kindness for you, or navigates the moral dilemma for you, the growth that would have come from the effort does not happen. The outcome exists in the world, but character development does not.</p>

        <h3>Whose Definition of Virtue Is Built Into These Systems?</h3>

        <div style="display: flex; gap: 2rem; align-items: flex-start; margin-bottom: 1.5rem;">
            <div style="flex: 1;">
                <p>There is a question underneath all of this that the AI field has not yet taken seriously enough: whose understanding of what it means to be a good person is embedded in these systems?</p>

                <p>Most AI for character development is built on frameworks developed in Western, predominantly individualistic cultural contexts. Patience is understood as personal composure. Kindness is understood as individual acts of care. Honesty is understood as saying what is true regardless of relational context. These are not wrong definitions. But they are not universal ones either.</p>

                <p>In many cultural traditions, patience is fundamentally about maintaining collective harmony, not individual equanimity. Generosity is embedded in communal obligation rather than personal choice. Honesty is shaped by the relationship between the people involved and the setting in which truth is spoken. An AI coaching system that does not account for these differences is not neutral. It carries assumptions about what virtue means, and when it is deployed globally, it imposes those assumptions on people whose traditions offer different and equally valid ways of understanding what it means to live well.</p>

                <p>This assumption also extends to gender. The virtues we build AI to promote are not gender-neutral in practice. Patience and kindness are disproportionately expected of women, and coaching women toward these virtues without examining the social expectations they carry can reinforce patterns of self-suppression rather than develop genuine character. Assertiveness and courage have historically been coded as male virtues, and treating them as deficits in women is a harm that AI coaching tools can quietly perpetuate if they are not designed with care. These are not edge cases or afterthoughts. They are central questions. The failure to ask them from the beginning to build cultural and demographic awareness into the design rather than acknowledging it as a limitation at the end is one of the ways well-intentioned technology causes harm to the people it most wants to serve.</p>
            </div>
            <div style="flex: 1;">
                <img src="images/blog/blog4.png2" alt="Cultural definitions of virtue" style="width:100%; border-radius: 8px;" />
            </div>
        </div>

        <p>And there is something even more fundamental to the question of character development underneath all of this. Virtues are not abstract properties that exist apart from the lives in which they develop. A person's capacity for patience is shaped by their circumstances by housing stability, job security, the quality of their relationships, and whether their environment is one of chronic stress or relative safety. Coaching patience in someone whose circumstances systematically deplete the cognitive and emotional resources that patience requires is not neutral. It risks implicitly blaming individual character for conditions that are structurally produced. AI for human flourishing that does not reckon with the structural conditions of the lives it is entering is building on a foundation that will not hold.</p>

        <h3>The Deepest Truth: Character Is Not Built Alone</h3>

        <img src="images/blog/blog4.png3" alt="Character is not built alone" style="width:100%; margin-bottom: 20px; border-radius: 8px;" />

        <p>There is one more thing worth saying, and it may be the most important.</p>

        <p>Everything we have discussed so far assumes a model in which AI coaches an individual. One person and one system, having a private conversation in an optimized interaction. This is the dominant design paradigm for AI conversational agents, and it misses something essential about how character actually develops. Virtues are not individual achievements. They are relational ones. Patience is practiced in relationships with people who test it. Honesty is exercised in relationships where the truth has stakes. Generosity develops through repeated experience of giving to specific people in specific circumstances over time. The character virtues that matter most - kindness, loyalty, courage, integrity - are not developed in isolation. They develop through the sustained, reciprocal, demanding work of showing up for each other, being held accountable, and being changed by the experience.</p>

        <p>A school district invested heavily in laptops for its students and saw almost no improvement in outcomes. Not because the technology was flawed, but because the technology was never embedded in the social and organizational fabric of the school. The teachers had not changed how they taught. The incentive structures had not shifted. The community had not been brought into what the change required. The tool existed in isolation from the conditions that would have made using it meaningful. The same risk applies to AI for character development. A well-designed, thoughtfully built virtue-promoting conversational agent will not work if the social context around the person using it does not support the change they are trying to make. It will not work if the community they belong to pulls in a different direction. It will not work if the people around them are not on board. Technology amplifies what is already there. It does not substitute for the human infrastructure that drives and sustains genuine change.</p>

        <p>This points toward what AI's most valuable contribution to character development might ultimately be. Not coaching individuals in isolation. Not delivering virtue like content. Not replacing the hard, irreplaceable work of human relationships with a more convenient alternative. The most powerful thing AI might do for character development is help people find each other connect them to communities that embody the values they are working toward, facilitate the kinds of group accountability and shared growth that actually produce lasting change, and create the conditions for the human relationships through which virtue has always been built.</p>

        <h3>What This Means for How We Build</h3>

        <p>We are not building AI that tells people what virtue looks like. We are building AI that understands what character development actually requires: friction, honest challenge, reflection on real experience, connection to real relationships and that works with those conditions rather than against them. That means building AI that is willing to ask a harder question rather than give a comfortable answer. It means building AI that knows when to step back rather than fill every silence. It means building AI that takes seriously the cultural context of the person it is talking with, and the social environment that will either support or undermine whatever they are trying to build in themselves. Making people feel good is the easy problem to solve. Building tools that actually help people become better in ways that are honest, equitable, and grounded in how character development really works is the harder one.</p>

        <p><em>This post reflects insights from Florea AI's ongoing expert review series, bringing together researchers and thinkers from psychology, social computing, organizational science, human-computer interaction, and positive psychology to help us ask harder questions about what AI for human flourishing should look like.</em></p>
    `,
    image: "images/blog/blog4.png1",
    featured: true
}
       // TO ADD MORE BLOG POSTS:
    // Copy an entry, paste here, and modify the content
    // For the content field, use HTML tags like <p>, <h3>, etc.
];

// ============================================================================
// WEBSITE SETTINGS
// ============================================================================
// General settings you can modify

const websiteSettings = {
    siteName: "Florea AI",
    tagline: "Research for Human Flourishing",
    contactEmail: "florea.virtue.ai@gmail.com",
    twitter: "https://twitter.com/youraccount",
    linkedin: "https://linkedin.com/company/youraccount",
    github: "https://github.com/youraccount"
};

// ============================================================================
// DO NOT EDIT BELOW THIS LINE
// (Unless you know JavaScript)
// ============================================================================

// Make data available globally for the website to use
// These variables are automatically available to main.js
