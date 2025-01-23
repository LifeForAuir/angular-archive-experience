export interface MenuItem {
    label: string;
    link?: string;
    children?: MenuItem[];
}

export const MainMenuItems = [
    {label: 'Главная',link: '/'},
    {label: 'Typescript', children: [
            { label: 'Generic', children:
                    [{ label: "1", link: '/Typescript/Generic/1' },
                        { label: "2", link: '/Typescript/Generic/2', }]
            }],
    },
    {label: 'Angular', link: '/Angular'},
    {label: 'Other', link: '/Other'},
];