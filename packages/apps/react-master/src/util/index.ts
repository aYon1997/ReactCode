export const FormatDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const debounce = (func: Function, delay: number) => {
    let timer: any = null;
    return function () {
        // @ts-ignore
        const context = this;
        const args = arguments;
        // 如果定时器已经存在，清除它
        if (timer) {
            clearTimeout(timer);
        }
        // 设置一个新的定时器
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
};
