import {Project} from "./projects";

const MotivationalSpeech: Project = {
    title: "Motivational Speech Synthesis",
    longDescription: "Motivational speech has emerged as a popular audiovisual phenomenon within Western subcultures, conveying optimal strategies and principles for success through expressive, high-energy delivery. The present paper artistically explores methods for synthesizing the distinctive prosodic patterns inherent to motivational speech, while critically examining its sociocultural foundations. Drawing on recent advances in emotion-controllable text-to-speech (TTS) systems and speech emotion recognition (SER), we employ deep learning models and frameworks to replicate and analyze this genre of speech. Within our proposed architecture, we introduce a one-dimensional motivational factor derived from high-dimensional emotional speech representations, enabling the control of motivational prosody according to intensity. Situated within broader discourses on self-optimization and meritocracy, Motivational Speech Synthesis contributes to the field of emotional speech synthesis, while also prompting reflection on the societal values embedded in such mediated narratives.",
    shortDescription: "Single voiced text-to-motivational-speech model, reflecting the inherent patterns and attitudes around success and self-optimization.",
    isCurrent: true,
    image: "motivation.jpg",
    contributors: "Luis Küffner, Patrick Stecher, Nikolaj Wolff & Pierre-Louis Suckrow",
    cvLink: "https://motivationalspeechsynthesis.github.io/motivational-speech-synthesis.github.io/",
    links: [{text: "Project Page", url: "https://motivationalspeechsynthesis.github.io/motivational-speech-synthesis.github.io/"}, {text: "Git", url: "https://github.com/MotivationalSpeechSynthesis/motivational-speech-synthesis/"}, {text: "Preliminary Paper", url: "https://motivationalspeechsynthesis.github.io/motivational-speech-synthesis.github.io/assets/motivational-speech-synthesis.pdf"}],
}

const Mythologie : Project = {
    title: "Mythologizer: Modeling mythology through agent-based simulation",
    shortDescription: "Agent-based system, drawing from biology and natural computing, simulating myth transmission within diverse social and environmental contexts, illuminating how narratives transform and propagate over time.",
    longDescription: "This research project explores biological and computational techniques in mythology, extending the structuralist approach pioneered by Claude Lévi-Strauss and building upon work by Jean-Loïc le Quellec and Julien d'Huy. The research shifts from historical reconstruction toward myth generation, treating myths as dynamic, evolving constructs rather than static historical artifacts. Our methodology integrates literature analysis, expert consultation, qualitative experiments with participants, and developing the Mythologizer -an agent-based computational simulation that models myth transmission dynamics. These computational methods effectively capture myth propagation while revealing how individual characteristics and social dynamics influence myth stability and transformation. Although still an experimental and young project, the Mythologizer provides a framework for examining myth adaptation across cultural contexts, projecting storytelling evolutions.",
    links: [{text: "Git", url: "https://github.com/suckrowPierre/Mythologizer"}],
    isCurrent: true,
    image: "myth.jpg",
    cvLink: "https://github.com/suckrowPierre/Mythologizer",
    contributors: "Célestin Meunier, Lilli Kurth, Eman Safavi & Pierre-Louis Suckrow"
}

const Swag : Project = {
    title: "Approaching models of (sub)culture: SWAG",
    shortDescription: "A transdisciplinary reflection on how contemporary AI models function as cultural representations rather than cognitive models based on the case study of SWAG.",
    longDescription: "This study examines contemporary artificial intelligence models not as simulations of human cognition but as representations of cultural patterns, specifically using the aesthetic subculture of SWAG as a case study. Utilizing a transdisciplinary methodology that blends media theory, cognitive science, and information aesthetics, we introduce a new framework for analyzing subcultural phenomena within the realm of computational intelligence. In conjunction with this framework, we develop a SWAG Measuring Algorithm using state-of-the-art text-image embedding models. Further building on this foundation, we employ dimensionality reduction techniques combined with methods from archaeology to create a digital probing tool. This tool enables us to examine how embedding models interpret subculture and to identify potential biases inherent in those interpretations.  To assess the effectiveness of various embedding models in representing subcultural elements, we designed and conducted a study that established a human-annotated baseline. This study also uncovered biases present both in the models and among the human participants. The findings from our research and study are presented in an interactive multimedia installation. The resulting exhibition pieces aim to encourage viewers to shift their perspective—from viewing artificial models as mere expressions of intelligence to recognizing them as culturally situated systems of representation.",
    isCurrent: true,
    image: "Swag.jpg",
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
    image: "synth.jpg"
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
    image: "euro.jpg"
}

export const ResearchProjects = [MotivationalSpeech, Mythologie, Swag, DiffusionSynth]


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



