interface InfoCardContent {
    imgUrl: string;
    title: string;
    content: string[];
}

interface InfoData {
    ask: string;
    answers: string[];
    right: string;
    explain: string;
}

export interface MainDataItem {
    imgUrl: string;
    title: string;
    infoCard?: {
        header: {
            title: string;
            subtitle: string;
        };
        content: InfoCardContent[];
        path: string;
    };
    infoData?: InfoData[];
    isClose?: boolean;
}
