export interface AppConfig {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    openIn: 'modal' | 'new-tab';
    tags?: string[];
    category?: 'Brand' | 'Webapp' | 'Game' | 'Experimental';
}

export interface Founder {
    id: string;
    name: string;
    role: string;
    codename: string;
    philosophy: string;
    description: string;
    imageUrl: string;
    portfolioUrl: string;
}
