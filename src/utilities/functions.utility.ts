/**
 * Allows you to copy to the clipboard the text passed by parameters
 * @param {String} text
 * @returns {Promise}
 */
export const copyToClipboard = (text: string): Promise<void> => {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(text);
    } else {
        // text area method
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // make the textarea out of viewport
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((resolve, reject) => {
            try {
                // here the magic happens
                // navigator.clipboard.writeText('Texto copiado');
                document.execCommand('copy');
                resolve();
                textArea.remove();
            } catch (error) {
                console.error(error);
                reject(new Error('Error al copiar el contenido'));
            }
        });
    }
};

/**
 * Allows downloading a blob file
 * @param {Blob} httpResTypeBlob
 * @param {String} name
 */
export const downloadFile = (httpResTypeBlob: Blob, name: string): void => {
    const url = window.URL.createObjectURL(new Blob([httpResTypeBlob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', name); // or any other extension
    document.body.appendChild(link);
    link.click();
};

/**
 * Allows you to download a file via url
 * @param {String} url
 */
export const downloadFileByUrl = (url: string): void => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
};
