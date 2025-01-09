import {Project} from "./projects";

const MotivationalSpeech: Project = {
    title: "Motivational Speech Synthesis",
    longDescription: "Within the increasing popularity of fitness- and entrepreneurship in western subcultures, video clips of so-called motivational speech received millions of views across social media. Usually, those audiovisual artifacts show excerpts from presentations or interviews of people – in most cases male business leaders authors, and other influential figures – who narrate about the optimal instructions, principles, and strategies for success. Paired with epic and emotional background music, these videos should act as a vehicle for self-motivation and goal pursuit. With a primal target group of men, success is often tied to wealthiness, professional growth, or appeal to women while the same being obstructed by characteristics like weakness, fragility, or discontinuity. With motivational speech, a listener’s ultimate goal is to obtain and shape a mindset, which ensures them to be on the right path for achievement. Motivational speech emerges as a phenomenon in a society of self-optimization, embedded in the ethos of constant productivity, competition, and meritocracy. With Motivational Speech Synthesis, we aim to reflect the inherent patterns and attitudes of motivational speech. Correlating with the generalization process of one universal way to success, we use machine learning techniques to average webscraped motivational speech into a single voiced text-to-motivational-speech model. By doing so, we question a universal road to success, only defined and obtained by individual strength and the right mindset. With the introduction of a motivational factor, the model is capable of scaling the motivational speech prosody. Representing the promise of social mobility, this motivational factor aligns with phrases like “The harder you work, the more you can get”. Motivational Speech Synthesis addresses aspects of our work ethic and how we approach our goals and challenges in live.",
    shortDescription: "Single voiced text-to-motivational-speech model, reflecting the inherent patterns and attitudes around success and self-optimization.",
    isCurrent: true,
    image: "public/projectImage/motivation.png",
    contributors: "Luis Küffner, Patrick Stecher, Nikolaj Wolff & Pierre-Louis Suckrow"

}

const Mythologie : Project = {
    title: "Mythologizer: Modeling mythology through agent-based simulation",
    shortDescription: "Agent-based system, drawing from biology and natural computing, simulating myth transmission within diverse social and environmental contexts, illuminating how narratives transform and propagate over time.",
    longDescription: "The Mythologizer project investigates the creation and transmission of myths by integrating principles from biology and natural computing. Inspired by Julien D’Huy and Jean-Loïc Le Quellec’s genetic approaches to tracing myth evolution, Mythologizer conceptualizes myths as living entities composed of \"mythemes,\" their smallest narrative units that mutate as they are passed down. The project began with a non-digital transmission game using four myths from Russian mythologist Yuri Berezkin’s database, where participants could add, remove, mutate, or preserve mythemes. Each version of the myth was then passed to the next participant, simulating the evolutionary process of myths. This interactive methodology was documented through a short film and a website that tracked each myth’s transformations. In its latest phase, Mythologizer has evolved into a generative agent-based system that simulates myth transmission within various social and environmental contexts. Rather than focusing solely on myth fitness, the system models cultural dynamics by creating agents with specific attributes that influence how myths evolve. These agents transmit, mutate, reproduce, and \"die\" over time, with myth elements organized into expandable ontologies, thereby providing a comprehensive framework for understanding the dynamic evolution of myths.",
    isCurrent: true,
    image: "public/projectImage/myth.png",
    contributors: "Célestin Meunier, Lilli Kurth, Eman Safavi & Pierre-Louis Suckrow"
}

const Swag : Project = {
    title: "How much swagger? Approaching subcultural concepts through embedding spaces",
    shortDescription: "Reflection on the reductionist design of current computational intelligence models by drawing inspiration from Information Aesthetics to quantify a person’s SWAG through them, while also exploring the origins of this cultural understanding within these \"Models of Culture.\"",
    longDescription: "Wanting to work on a project that conveys the reductionist design and tendencies of our current computational intelligence models and inspired by Information Aesthetics, we turned to quantifying the aesthetic value of a person's clothing. Approaching embedding spaces as \"Models of Culture\" rather than as models intended to replicate intelligence or undertake generative tasks allowed us to frame an approach in which we narrowed our case study to the subcultural phenomenon of SWAG. Having developed this initial approach—measuring a person’s SWAG through an image/text embedding space—we now turn to investigate whether this method is accurate in measuring a person’s SWAG and, if so, how this understanding emerged, while also uncovering any underlying biases.",
    isCurrent: true,
    image: "public/projectImage/Swag.png",
    contributors: "Suzan Hanow & Pierre-Louis Suckrow"
}

const DiffusionSynth: Project = {
    title: "Diffusion-Based Sound Synthesis in Music Production",
    shortDescription: "This project explores the use of generative AI in music production by developing a digital instrument that synthesizes sounds from textual descriptions using diffusion-based models. The tool integrates with standard production workflows, enabling users to generate, modify, and experiment with unique soundscapes.",
    longDescription: "In this paper, we explore the usability of generative artificial intelligence in music production through the development of a digital instrument that incorporates diffusion-based sound synthesis in its sound generation. Current text-to-audio models offer a novel method of defining sounds, which we aim to render utilizable in a music-production environment. Selected pretrained latent diffusion models, enable the synthesis of playable sounds through textual descriptions, which we incorporated into a digital instrument that integrates with standard music production tools. The resultant user interface not only allows generating but also modifying the sounds by editing model and instrument-specific parameters. We evaluated the applicability of current diffusion models with their parameters as well as the fitness of possible prompts for music production scenarios. Adapting published diffusion model pipelines for integration into the instrument, we facilitate experimentation and exploration of this innovative sound synthesis method. Our findings show that despite facing some limitations in the models' responsiveness to specific music production contexts and the instrument's functionality, the tool allows the development of novel and intriguing soundscapes.",
    links: [{text: "Research Gate", url: "https://www.researchgate.net/publication/383663370_Diffusion-Based_Sound_Synthesis_in_Music_Production"}, {text: "ACM Digital Library", url: "https://dl.acm.org/doi/10.1145/3677996.3678289"}],
    isCurrent: false,
    publisher: "FARM",
    publicationDate: "2024",
    cvLink: "https://dl.acm.org/doi/10.1145/3677996.3678289",
    contributors: "Sylvia Rothe, Christoph Weber & Pierre-Louis Suckrow",
    image: "public/projectImage/synth.png"
}


const LatentAccounting: Project = {
    title: "Navigating (personal) finances in a latent way",
    longDescription: "This investigation presents an innovative method for personal finance management, by leveraging advancements in Natural Language Processing (NLP) and Large Language Models (LLMs). Aimed at automating the analysis of transaction history with minimal input, the system offers a natural language interface for interacting with banking data, addressing the need for an intuitive overview for financial optimization. The paper outlines the system architecture, including a user-friendly web application for data interaction, and describes the initial implementation phases, focusing on data preparation, aggregation, and augmentation processes. It emphasizes the role of LLMs, in enhancing transaction descriptions and extracting categories, thereby improving data readability and searchability. The database structure is designed to facilitate future developments, such as the incorporation of latent querying capabilities. The paper concludes with potential directions for enhancing the system's functionality, including the optimization of embedding functions, the application of hybrid search methods, and the integration of user-generated feedback to refine categorization and description enhancement processes.",
    shortDescription: "Conception of a web application for personal finance management utilizing Natural Language Processing (NLP) and Large Language Models (LLMs), enabling transaction analysis with minimal user input and categorizing transaction data to enhance readability and searchability.",
    links: [{text: "Research Gate", url: "https://www.researchgate.net/publication/385737688_WICKED_SOLUTIONS_Volume_1"}, {text: "Wicked Solutions", url: "https://wicked.udk.ai/volumes/1"}, {text: "PDF", url:"https://wicked.udk.ai/volumes/1/pierre.pdf"}],
    isCurrent: false,
    publisher: "Wicked Solutions",
    publicationDate: "2024",
    cvLink: "https://www.researchgate.net/publication/385737688_WICKED_SOLUTIONS_Volume_1",
    contributors: "Daniel Hromada & Pierre-Louis Suckrow",
    image: "public/projectImage/euro.png"
}

export const ResearchProjects = [MotivationalSpeech, Mythologie, Swag, DiffusionSynth, LatentAccounting]


interface ProjectBuckets {
    ongoingResearch: Project[];
    publishedResearch: (Project & { publisher: string; publicationDate: string })[];
    unpublishedResearch: Project[];
}

export const { ongoingResearch, publishedResearch, unpublishedResearch } = ResearchProjects.reduce(
    (acc: ProjectBuckets, project: Project) => {
        if (project.isCurrent) {
            acc.ongoingResearch.push(project);
        } else if (project.publisher && project.publicationDate) {
            acc.publishedResearch.push(project as Project & {
                publisher: string;
                publicationDate: string;
            });
        } else {
            acc.unpublishedResearch.push(project);
        }
        return acc;
    },
    {
        ongoingResearch: [],
        publishedResearch: [],
        unpublishedResearch: [],
    }
);



