export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const preventMinus = (event) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
    if (event.code === 'Minus') {
        event.preventDefault();
    }
}

export const preventPasteNegative = (event) => {
    const clipboardData = event.clipboardData || window.Clipboard;
    const pastedData = parseFloat(clipboardData.getData('text'));

    if (pastedData < 0 || !pastedData) {
        event.preventDefault();
    }
}