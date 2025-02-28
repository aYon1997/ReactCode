export type ImgConfigType = React.ImgHTMLAttributes<HTMLImageElement> & {
    text?: string;
    loadingconfig?: React.ImgHTMLAttributes<HTMLImageElement> & {
        showtext?: number;
    };
    errorconfig?: React.ImgHTMLAttributes<HTMLImageElement> & {
        showtext?: number;
    };
    showtext?: number;
};
