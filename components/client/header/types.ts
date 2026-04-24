export type BreadCrumbType={
    title: string;
    link: string;
}

export interface HeaderProps{
    breadcrumbs: BreadCrumbType[]
}