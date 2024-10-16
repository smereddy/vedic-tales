export interface Section {
    title: string;
    content: string;
  }
  
  export interface Story {
    id: number;
    title: string;
    category: string;
    image: string;
    sections: Section[];
  }
  
  export const storiesData: Story[] = [
    {
      id: 1,
      title: "The Birth of Krishna",
      category: "Bhagavata Purana",
      image: "https://source.unsplash.com/featured/?krishna",
      sections: [
        { title: "The Prophecy", content: "Long ago, in the kingdom of Mathura..." },
        { title: "Devaki's Imprisonment", content: "Kamsa, fearing for his life..." },
        { title: "Divine Intervention", content: "As the eighth child was about to be born..." },
        { title: "The Miraculous Birth", content: "In the dead of night, in a prison cell..." },
        { title: "Vasudeva's Journey", content: "With the newborn Krishna in his arms..." },
      ]
    },
    // Add more stories here...
  ]