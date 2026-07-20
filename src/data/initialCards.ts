import { CardDetail, StokeChallenge } from '../types';

export const initialCards: CardDetail[] = [
  // Row 1
  {
    id: '1',
    title: 'University-Wide Electives',
    type: 'Read More',
    colorClass: 'bg-pink-100 hover:bg-pink-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Explore our rich catalogue of design thinking electives offered to students across all departments and schools at Stanford University. These courses build creative confidence and a bias toward action.'
    }
  },
  {
    id: '2',
    title: 'Design Thinking Bootcamp',
    type: 'Workshop',
    colorClass: 'bg-sky-500 hover:bg-sky-600',
    textColorClass: 'text-white',
    details: {
      date: 'Sept 8-11, 2025',
      duration: '4-day',
      format: 'Workshop',
      location: 'On Campus',
      longDescription: 'Our flagship introductory workshop. An immersive, high-intensity learning experience where you will learn the core tenets of human-centered design by working on real-world challenges.'
    }
  },
  {
    id: '3',
    title: 'Erik Olesund: Ad.school Alumni Feature',
    type: 'Story',
    tag: 'Alumni',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Discover how Erik Olesund applied the creative tools learned at the d.school to rethink organizational structures and empower collaborative ventures in his modern career.'
    }
  },
  {
    id: '4',
    title: 'An Other Point of View',
    type: 'Tool',
    description: 'Use AI to sharpen your observation skills and see differently.',
    tag: 'Emerging Tech',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'An interactive framework designed to expand your cognitive horizons. By feeding prompts to customized models, learn to bypass bias, notice the unnoticed, and cultivate deeper observational empathy.'
    }
  },
  // Row 2
  {
    id: '5',
    title: 'Practicing Radical Collaboration: Q&A with Domain Co-Lead Emily Callaghan',
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-amber-100 hover:bg-amber-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Emily Callaghan shares behind-the-scenes insights into how d.school leads build cross-disciplinary alliances, manage dynamic creative friction, and foster a truly collaborative classroom environment.'
    }
  },
  {
    id: '6',
    title: 'Transforming City Services Through Human-Centered Design',
    type: 'Story',
    tag: 'Impact',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A deep dive into public sector innovation. Read how municipal leaders used prototype-driven design to streamline housing assistance, simplify permit processing, and build civic trust.'
    }
  },
  {
    id: '7',
    title: 'Getting Unstuck',
    type: 'Tool',
    description: 'A self-paced, two-hour sojourn that will have you humming again.',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Feeling blocked? This highly focused guided session provides lightweight prompts, spatial hacks, and structural exercises designed to break circular thoughts and spark fresh action.'
    }
  },
  {
    id: '8',
    title: 'Experiment Expedition',
    type: 'Tool',
    description: 'This guided journey will help you storyboard, build your prototype, capture data, and make sense...',
    tag: 'Professionals',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A practical, step-by-step kit for taking high-potential ideas out of your head and into the real world. Learn how to construct rapid storyboards, identify core hypotheses, and collect clean feedback.'
    }
  },
  // Row 3
  {
    id: '9',
    title: 'Rep: magazine, Issue 1: Build a Bot',
    type: 'Buy Now',
    colorClass: 'bg-stone-900 hover:bg-stone-800',
    textColorClass: 'text-white',
    details: {
      longDescription: 'Issue #1 of Rep: Magazine takes a critical and playful look at automation. Learn how to draft conversation models, assemble low-code bots, and understand the cultural impact of automated scripts.'
    }
  },
  {
    id: '10',
    title: 'Ethnography Expedition',
    type: 'Tool',
    description: 'Outline the specific steps for your project: field research, unpack learnings, develop insights...',
    tag: 'Professionals',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'The comprehensive field manual for qualitative researchers. Learn the art of extreme interviewing, passive observation, and physical space auditing to uncover latent human needs.'
    }
  },
  {
    id: '11',
    title: 'd.school Book Club: Creative Essentials',
    type: 'Event',
    colorClass: 'bg-stone-100 hover:bg-stone-200',
    textColorClass: 'text-stone-900',
    details: {
      date: 'Jan 15–Dec 11, 2025',
      duration: '12 Monthly Sessions',
      format: 'Guest Lecture',
      location: 'Online',
      longDescription: 'Join an global community of readers as we unpack seminal works on creativity, system thinking, and equity. Features live interactive Q&As with guest authors and dynamic breakout discussions.'
    }
  },
  {
    id: '12',
    title: 'Design Project Guide',
    type: 'Tool',
    description: 'Discover new opportunities, better understand those for whom you are designing, and develop new...',
    tag: 'Social Impact',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Your structured companion for leading complex, long-term social impact design projects. Contains checklists, meeting formats, and stakeholder mapping blueprints.'
    }
  },
  // Row 4
  {
    id: '13',
    title: 'Human-Centered AI for Social Impact',
    type: 'Workshop',
    colorClass: 'bg-sky-500 hover:bg-sky-600',
    textColorClass: 'text-white',
    details: {
      date: 'Oct 7-8, 2025',
      duration: '1.5-day',
      format: 'Workshop',
      location: 'On Campus',
      longDescription: 'A dynamic hands-on workshop focused on designing machine learning tools with deep human awareness. Explore the intersection of algorithmic efficiency, ethics, and community-driven co-creation.'
    }
  },
  {
    id: '14',
    title: 'Critical Lens Protocol',
    type: 'Tool',
    description: 'Review prototypes to make sure they promote fairness and equity for everyone.',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A structured evaluation methodology to audit your products, services, or policies for latent biases. Ensure that equity, access, and digital justice are integrated from the very start.'
    }
  },
  {
    id: '15',
    title: 'Secret Handshake',
    type: 'Tool',
    description: 'Introduce new collaborators to each other for the first time or reignite an old group with a new...',
    tag: 'Education',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A compilation of highly engaging warmup icebreakers and trust-building games. Perfect for remote sessions, multi-disciplinary groups, and team re-orientations.'
    }
  },
  {
    id: '16',
    title: 'Embedding Ethics in Design Education: Helping students apply ethical reasoning to real-world design...',
    type: 'Story',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A curricular showcase detailing how d.school educators seamlessly integrate moral philosophy, societal risk evaluation, and consequence forecasting into standard product design coursework.'
    }
  },
  // Row 5
  {
    id: '17',
    title: 'Designing Human-Centered AI for Social Impact: Using AI to Serve the Public Good, Part One',
    type: 'Story',
    tag: 'Emerging Tech',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Part One of our ongoing series. We explore how open-source language models can be deployed to support public defense counsels, accelerate climate modeling, and democratize education access.'
    }
  },
  {
    id: '18',
    title: 'Professional Education',
    type: 'Read More',
    colorClass: 'bg-sky-500 hover:bg-sky-600',
    textColorClass: 'text-white',
    details: {
      longDescription: 'Custom, high-impact immersive design programs tailored specifically for corporate executives, government leaders, and nonprofit directors looking to foster systemic innovation.'
    }
  },
  {
    id: '19',
    title: 'Stoke Deck',
    type: 'Tool',
    description: 'Boost energy, foster collaboration or ignite creativity.',
    tag: 'Education',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'The quintessential d.school card deck. A set of physical or digital cards containing rapid-fire activities, somatic prompts, and visual puzzles designed to lift focus and shift group energy levels.'
    }
  },
  {
    id: '20',
    title: 'Design Project Scoping Guide',
    type: 'Tool',
    description: 'Discover what challenges are best suited for human-centered design, and how to scope and frame...',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Avoid the trap of designing beautiful answers to the wrong problems. Use this guide to outline project bounds, set feasible horizons, and negotiate clear milestones with external partners.'
    }
  },
  // Row 6
  {
    id: '21',
    title: 'Design for Belonging',
    type: 'Buy Now',
    colorClass: 'bg-stone-900 hover:bg-stone-800',
    textColorClass: 'text-white',
    details: {
      longDescription: 'A practical, beautifully illustrated book by d.school instructor Susie Wise. Learn how to map, build, and sustain spaces and systems that make every individual feel seen, heard, and valued.'
    }
  },
  {
    id: '22',
    title: 'Integrative Design: A Practice to Tackle Complex Challenges',
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Learn how integrative design combines multiple expert fields—such as behavior design, system architectures, and artistic storytelling—to orchestrate comprehensive answers to wicked problems.'
    }
  },
  {
    id: '23',
    title: 'Tools',
    type: 'Read More',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Our open-source digital toolkit. Browse through hundreds of field guides, physical templates, worksheet packages, and design mindsets published freely for the global creative community.'
    }
  },
  {
    id: '24',
    title: 'Reimagining School Safety',
    type: 'Story',
    tag: 'Impact',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'How design thinking helps educators, local families, and design facilitators draft safety measures that emphasize emotional support, restorative justice, and secure physical learning environments.'
    }
  },
  // Row 7
  {
    id: '25',
    title: "Let's Stop Talking about THE Design Process",
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A provocative and highly debated essay. We challenge the standard linear five-stage design model and argue for a highly flexible, situational, and personalized repertoire of creative mindsets.'
    }
  },
  {
    id: '26',
    title: 'K12 Futures Library',
    type: 'Tool',
    description: 'These immersive experiences aim to help educators imagine and design futures of learning with their...',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A creative portal filled with scenario cards, futures-forecasting scripts, and spatial layouts designed to expand how secondary school communities visualize education in the next century.'
    }
  },
  {
    id: '27',
    title: 'EdTech Remix',
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'We assemble classroom educators, tech developers, and students in a single workspace to dismantle and redesign modern school software, turning boring dashboards into active learning canvases.'
    }
  },
  {
    id: '28',
    title: 'Chat About Chat',
    type: 'Tool',
    description: 'Better understand your relationships and conversations through perspective-shifting sessions with...',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'An analytical card deck that guides pairs through dynamic dialogue games. Safely unpack communication hurdles, identify conversational styles, and cultivate healthy communication habits.'
    }
  },
  // Row 8
  {
    id: '29',
    title: 'Teaching and Learning Studio',
    type: 'Workshop',
    colorClass: 'bg-sky-500 hover:bg-sky-600',
    textColorClass: 'text-white',
    details: {
      date: 'Summer 2025',
      duration: '5-day',
      format: 'Workshop',
      location: 'On campus',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvXeSmDenyBsGdNZsBJhd5U9QHgq7OKAsvTReSDHES5TkhWU3v2D00WGtod1ckeA0J_r1DVCFfctbXEv5aSbFLX0_rXQ2thL-hnu0otOCo0F41Eev5bQcvttQsN_HbnI6-R4vAmie175VqSm8gzE8eMQNHCMwmjM_94j_VOaktsmsfnjtZLgNQRMFJRPSRCvPj9Tz4aFAVp6yJK_N0KTe5UoG4Ohr5ffbn9sK2chVsB5GzqS1EIfhkCF1M',
      longDescription: 'A globally renowned workshop for educators. Learn how to transform physical classrooms, write dynamic challenge statements, build interactive learning aids, and teach design thinking methods.'
    }
  },
  {
    id: '30',
    title: 'Creative Acts for Curious People',
    type: 'Buy Now',
    colorClass: 'bg-stone-900 hover:bg-stone-800',
    textColorClass: 'text-white',
    details: {
      longDescription: 'The landmark book written by Sarah Stein Greenberg and the d.school community. Features over 80 provocative and practical exercises crafted by the world’s leading design thinkers.'
    }
  },
  {
    id: '31',
    title: 'Designing (Ourselves) for Racial Justice',
    type: 'Story',
    tag: 'Impact',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'An deep exploration of systemic equity. In this essay, we examine how personal reflection, historical audits, and co-creative methods can dismantle institutional exclusion and elevate marginalized voices.'
    }
  },
  {
    id: '32',
    title: 'Make Space',
    type: 'Buy Now',
    colorClass: 'bg-stone-900 hover:bg-stone-800',
    textColorClass: 'text-white',
    details: {
      longDescription: 'A physical playbook for educators and group managers. Explores how furniture layouts, lighting schemes, physical cues, and low-cost materials can actively inspire group innovation and communication.'
    }
  },
  // Row 9
  {
    id: '33',
    title: 'How To Give Feedback',
    type: 'Tool',
    description: 'No one is naturally good at giving and getting feedback, but you can become great at both through...',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Learn standard d.school feedback templates, including the famous "I Like, I Wish, What If" method, which fosters non-defensive evaluation and rapid improvement cycles.'
    }
  },
  {
    id: '34',
    title: 'Educator Guides: Activities from d.school Books',
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A free digital repository of activities, scripts, and facilitation slides compiled directly from d.school publications, formatted specifically for middle school and high school classrooms.'
    }
  },
  {
    id: '35',
    title: 'Laura Schütz: Developing Sound-Guided Surgery Tools',
    type: 'Story',
    tag: 'Impact',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLuJDC64UUYRU3_D2OSGTy0cFpgu9K9uUu8iVNOK2X4XTsuLce4hMPRN9VDHQQWmIH1VmPwGgV3Cx4gxfCPtYPDd8zO_s80Kgb3lP1sggFAO89e-DaayXIqLtdeNscUIbtLtdVa_YXSFnLObhNzS1y8BpcGJxIptcWHMDI_Ilw9s_juJz5tsBnJmTu_2ZtmttsFLYf20u0k3Jsaj01RIy4Jao-_LDQJRoU3p1XjUsCWPZ3kryPbQcn6WiQ',
      longDescription: 'A fascinating profile of medical researcher Laura Schütz, who combined acoustics research, surgical procedures, and human-centered feedback loops to create surgical tools guided by real-time soundscapes.'
    }
  },
  {
    id: '36',
    title: 'Portrait of a Descendant: Futures Thinking for K12',
    type: 'Tool',
    description: 'Imagine a descendant many generations ahead and cultivate empathy for the future.',
    tag: 'Futures',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A multi-generational empathy mapping tool. Cultivate responsibility for future ecological, societal, and digital systems by projecting the life constraints of descendants seven generations out.'
    }
  },
  // Row 10
  {
    id: '37',
    title: 'Let\'s Not Make AI the "Easy Button": Creativity in the Age of AI, Part One',
    type: 'Story',
    tag: 'Emerging Tech',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A deep critique on passive automation. We argue that using AI as an instant output generator weakens creative resilience, and outline custom methods to treat models as cooperative dialogue partners.'
    }
  },
  {
    id: '38',
    title: 'Akshay Kothari: Ad.school Alumni Feature',
    type: 'Story',
    tag: 'Alumni',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Read the story of Akshay Kothari, co-founder of Pulse and COO of Notion, who reflects on how early d.school experiences shaped his product philosophy and approach to user-centered collaborative platforms.'
    }
  },
  {
    id: '39',
    title: 'Future\'s Happening: Democracy Edition',
    type: 'Story',
    tag: 'Impact',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvptq3U_bvWsdde4ZfFF4MBh5CGcrwzEHfEw89JYbDdc2CAyxeCARFADczxS_XWQxmRrxFK8Jqs9IC5B9vwjq0Jy8okqUniCNdb2Fue_7wXjx61Vn4Uo-y9xC8urxNyBZokQbXJ9x0LlF6duBLBTM8GTkgYkoHT-TJ1VlP9SD_jl42LXckEWbI__4alJHI-iSyLf9yXXCWAVE8HmGCZEL3HzNRxQNiQsv57Dm20U62HiKjMnAbnuD7wRT8',
      longDescription: 'A participatory forum bringing together election officials, UI developers, legal minds, and student designers to draft open-source interfaces for ballot distribution, voter education, and counting tracking.'
    }
  },
  {
    id: '40',
    title: 'Designing a Sex Ed Program for Students with Developmental Disabilities: A Case Study',
    type: 'Story',
    tag: 'Impact',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'An inclusive and highly empathetic curriculum redesign. Learn how student teams collaborated with special education therapists and self-advocates to structure clear, safe, and positive education tools.'
    }
  },
  // Row 11
  {
    id: '41',
    title: 'Make Possibilities Happen',
    type: 'Buy Now',
    colorClass: 'bg-stone-900 hover:bg-stone-800',
    textColorClass: 'text-white',
    details: {
      longDescription: 'Our limited-run visual poster book containing inspirational quotes, design mindset layouts, and abstract illustrations to decorate studios, maker spaces, and shared classrooms.'
    }
  },
  {
    id: '42',
    title: 'Stanford\'s Two New/Old Design Degrees',
    type: 'Story',
    tag: 'News',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Announcing our newly structured undergraduate and graduate degree programs in Design, integrating engineering precision, behavioral sciences, and artistic craft.'
    }
  },
  {
    id: '43',
    title: 'The Deeper Learning Escape Room',
    type: 'Story',
    tag: 'Impact',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'An interactive pedagogical exercise. Learn how high school administrators designed an escape room that teachers must navigate by applying advanced critical thinking and cooperative puzzle solving.'
    }
  },
  {
    id: '44',
    title: 'A New Community of Designers',
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-amber-50 hover:bg-amber-100',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Celebrating our new cohort of d.school fellows, coming from diverse disciplines like investigative journalism, prison reform, deep climate science, and physical sculpture.'
    }
  },
  // Row 12
  {
    id: '45',
    title: 'Building Future Foundations',
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-white hover:bg-stone-50 border border-stone-200',
    textColorClass: 'text-stone-900',
    details: {
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvptq3U_bvWsdde4ZfFF4MBh5CGcrwzEHfEw89JYbDdc2CAyxeCARFADczxS_XWQxmRrxFK8Jqs9IC5B9vwjq0Jy8okqUniCNdb2Fue_7wXjx61Vn4Uo-y9xC8urxNyBZokQbXJ9x0LlF6duBLBTM8GTkgYkoHT-TJ1VlP9SD_jl42LXckEWbI__4alJHI-iSyLf9yXXCWAVE8HmGCZEL3HzNRxQNiQsv57Dm20U62HiKjMnAbnuD7wRT8',
      longDescription: 'How d.school architecture and space-design workshops help public school networks remodel physical libraries, convert static lecture spaces to makerspaces, and build modern hubs.'
    }
  },
  {
    id: '46',
    title: 'Affiliate Memberships',
    type: 'Read More',
    colorClass: 'bg-stone-100 hover:bg-stone-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Join our exclusive network of industry and social sector organizations who support student projects, partner with research initiatives, and send executive teams to our campus.'
    }
  },
  {
    id: '47',
    title: 'Liberatory Design',
    type: 'Tool',
    description: 'Mindsets and modes to support your practice of designing for equity.',
    tag: 'Equity',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A collaborative framework co-created with the National Equity Project. Integrates self-awareness, deep relational empathy, and anti-bias checkpoints directly into the product design lifecycle.'
    }
  },
  {
    id: '48',
    title: 'Shop',
    type: 'Read More',
    colorClass: 'bg-teal-400 hover:bg-teal-500',
    textColorClass: 'text-stone-950 font-semibold',
    details: {
      longDescription: 'Browse physical card decks, specialized d.school books, visual posters, layout templates, and custom prototyping materials shipped worldwide.'
    }
  },
  // Row 13
  {
    id: '49',
    title: 'Reflecting with AI',
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-white hover:bg-stone-50 border border-stone-200',
    textColorClass: 'text-stone-900',
    details: {
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLtrjyxCZ3WT6l32mUiLUQzbVGI0NSZ1haAuv-YmwxTvhhLeXZ3x_OKR8i6pKUc4haSfZ6FFGnxva4OOaMOSYPHdJguuC-abHuCLQrAEHg_StSmzRUnGKlal-6hSbZHS2BWjrVG0eGLkr3MLMOHbr-8YMJ7I6XP1IGnBncU2fQvA4WFnB1DZDlye_7HzTl-juDW-d_38pqcKRkZzdITtNCZvTUlqMBmXb-AcPNwECS4g6_qInzQ2WYZblw',
      longDescription: 'A study on human-AI reflective dialoguing. Learn how developers constructed lightweight, non-judgemental chatbot interfaces that guide users through daily creative journaling and goal reviews.'
    }
  },
  {
    id: '50',
    title: 'Deck of Design Values: 32 Unexpected Ways to Explore Design',
    type: 'Buy Now',
    colorClass: 'bg-stone-900 hover:bg-stone-800',
    textColorClass: 'text-white',
    details: {
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvBknDs9wzy-mYFJ6q_sKcYH38PUbChhglH8Qd_3arSCy73S9s4qBV9u-G8yhTFTm0CcRTciSegBX_kbbpkZPTQ-c0cYsJHiKMttLO86mJgh2WJXeOX4nKEEztqDdDjPcu9-XMI1_wAsIHeCxIlb_S6wUdY8-M81w_G3Vpui6Cn1nyWbzAL6Nk_wLOIUn1P_Jr2cmlKPZ7CAMO-XdLIp3qMTRqSycUvtSWSCs78YxMa1eNxFarifE283F4',
      longDescription: 'A physical deck designed to shock your typical creative patterns. Includes 32 highly abstract prompt cards, physical performance challenges, and deep constraint frameworks.'
    }
  },
  {
    id: '51',
    title: 'The Haircut Challenge: An Introduction to a Design Process',
    type: 'Tool',
    description: 'For those familiar with the tools of design, this practice project walks you through creating a...',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'The legendary "Haircut Challenge" is a high-speed introductory simulation where team members prototype haircut experiences for a highly specific set of user personas.'
    }
  },
  {
    id: '52',
    title: 'Ethnography Field Guide',
    type: 'Tool',
    description: 'Make observations and hold conversations to further your understanding of who you are designing for...',
    tag: 'Professionals',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'The ultimate handbook for qualitative empathy. Contains field checklists, standard camera guidelines, interview recording scripts, and insight-mapping frameworks.'
    }
  },
  // Row 14
  {
    id: '53',
    title: 'How to Start a d.school',
    type: 'Story',
    tag: 'Education',
    colorClass: 'bg-white hover:bg-stone-50 border border-stone-200',
    textColorClass: 'text-stone-900',
    details: {
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLs_sxcOYQQRWWWbxeihlrbdBFgJi8eL6A9i0YC_Kfhu5UPQ-0cDqCxvW_21PMtV1ycqi6wvPYgCBsSL6vD37jsirQMXnsKkpx93TbYVat9NIFJKcTKCyQLV581oMFcsCofzfR3VUtIMsuqnRqN7JmbU34l_ws7BfokowbQRcLiL6xyk97n7TMAk1xZHoAqNhPMwy9STqoELTvFSqhaLevjrLr9MD0i1p359M9OhYeKYfCu5tEzXT4UKQR0',
      longDescription: 'A transparent roadmap sharing our layout blueprints, financial history, teaching roster setups, and operational structures, compiled for external universities.'
    }
  },
  {
    id: '54',
    title: 'Design for Democracy: Investigating Election Administration',
    type: 'Story',
    tag: 'Impact',
    colorClass: 'bg-white hover:bg-stone-50 border border-stone-200',
    textColorClass: 'text-stone-900',
    details: {
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLv2JlX7sPIPQTlx_fivwGoRrPThIM8bNVGdKDXFRbQm1y3QekLQzE7ShrGM9FWuP2bBYcJJXZWEMgTxxic_Jt4xRWCCvluNFrgjPrKiQOI4JPMwNlFmz9FemrMbC63dD3XhCoBqCZEJyjJxJUxSyAC8NDElT29F3lDqvDcdDFZvN17Uht9Y2C0v2Dw-j0-cHp_ki6rsYNY7-uyAGOFVVbfePZRifqhOnNlxF9_g0fLUUPUWahVm_Q1-51k',
      longDescription: 'A multi-year research project looking at the physical and digital interfaces of American voting systems. Features structural audits of mail-in envelopes, physical polling stations, and local registrar instruction guides.'
    }
  },
  {
    id: '55',
    title: 'Design Social Change',
    type: 'Buy Now',
    colorClass: 'bg-stone-900 hover:bg-stone-800',
    textColorClass: 'text-white',
    details: {
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLtrjyxCZ3WT6l32mUiLUQzbVGI0NSZ1haAuv-YmwxTvhhLeXZ3x_OKR8i6pKUc4haSfZ6FFGnxva4OOaMOSYPHdJguuC-abHuCLQrAEHg_StSmzRUnGKlal-6hSbZHS2BWjrVG0eGLkr3MLMOHbr-8YMJ7I6XP1IGnBncU2fQvA4WFnB1DZDlye_7HzTl-juDW-d_38pqcKRkZzdITtNCZvTUlqMBmXb-AcPNwECS4g6_qInzQ2WYZblw',
      longDescription: 'An interactive guidebook by d.school instruction fellow Lesley-Ann Noel. This book outlines active steps to build community alliances, run local audits, and execute grass-roots social change campaigns.'
    }
  },
  {
    id: '56',
    title: 'Graduate Degree',
    type: 'Read More',
    colorClass: 'bg-stone-100 hover:bg-stone-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Deepen your research. Discover our graduate fellowships, co-terminal master programs, and research group opportunities across design engineering and product architecture.'
    }
  },
  // Row 15
  {
    id: '57',
    title: 'I Love Algorithms: A Machineless Machine Learning Creation Kit',
    type: 'Tool',
    description: 'This kit enables anyone, technical or not, to prototype with machine learning.',
    colorClass: 'bg-emerald-100 hover:bg-emerald-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'A physical prototyping card game that simulates decision tree structures, recommendation engines, neural weight shifts, and NLP parsing using zero code.'
    }
  },
  {
    id: '58',
    title: 'Undergraduate Degree',
    type: 'Read More',
    colorClass: 'bg-pink-100 hover:bg-pink-200',
    textColorClass: 'text-stone-900',
    details: {
      longDescription: 'Learn to design at Stanford. Build your creative confidence, study spatial human factors, write visual languages, and earn an official undergraduate degree in Design.'
    }
  }
];

export const initialStokes: StokeChallenge[] = [
  {
    id: 'st-1',
    title: 'Thirty Circles',
    tagline: 'Rapid-fire visual ideation to warm up the creative brain.',
    duration: '3 mins',
    instructions: [
      'Draw a grid of 30 circles (6x5) on a blank sheet of paper.',
      'Set a timer for 3 minutes.',
      'Turn as many circles into complete recognizable drawings as possible (e.g., a clock, a smiley face, a tennis ball, a donut, etc.).',
      'Reflect: Did you prioritize quantity over quality? Did you combine circles to make a single item?'
    ],
    materials: 'Paper, pen, 3-minute timer'
  },
  {
    id: 'st-2',
    title: 'Sound Audit',
    tagline: 'Tune into your acoustic environment to build observational empathy.',
    duration: '2 mins',
    instructions: [
      'Close your eyes completely and sit straight in your chair.',
      'Take 3 deep, mindful breaths.',
      'Listen intently to the furthest sound you can identify. Hold it for 15 seconds.',
      'Now, listen to the closest sound you can identify (your heartbeat, your breathing, the hum of your computer).',
      'Reflect: What acoustic layers have you been ignoring while working?'
    ],
    materials: 'Just your ears'
  },
  {
    id: 'st-3',
    title: 'Object Biography',
    tagline: 'Uncover hidden narratives of boring daily tools.',
    duration: '5 mins',
    instructions: [
      'Pick up the nearest random object on your desk (e.g., a pen, a mug, a stapler, an envelope).',
      'Write a 5-sentence story from the first-person perspective of this object.',
      'Describe: How does it feel when it’s used? Where did it come from? What is its secret hope for the day?',
      'Reflect: How does imagining an inanimate object\'s point of view help us build better products for real people?'
    ],
    materials: 'A random object, pen/paper or text file'
  },
  {
    id: 'st-4',
    title: 'Yes, And... Tennis',
    tagline: 'Banish the word "No" and practice radical additive thinking.',
    duration: '3 mins',
    instructions: [
      'Think of a wild design concept (e.g., "A flying shoes brand").',
      'Write a sentence starting with: "We should build this because..."',
      'Immediately write another sentence starting with: "Yes, and we can also add..."',
      'Repeat this 5 times, adding progressively crazier features without ever saying "But" or "No".',
      'Reflect: How did building incrementally feel compared to evaluating or warning?'
    ],
    materials: 'A notepad or mental dialogue'
  }
];
