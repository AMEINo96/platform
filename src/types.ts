export interface AppConfig {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    openIn: 'new-tab' | 'modal';
}
