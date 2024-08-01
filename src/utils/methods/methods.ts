
export const methods = {
    setCookieToken(value: string) { return document.cookie = `token=${value};max-age=2592000` },
    getCookieToken() { return document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1] },
    deleteCookieToken() { return document.cookie = 'token=;max-age=1' },

    setCookie(data: any, age = 2592) { // age in sec
    Object.keys(data).forEach(key => {
        document.cookie = `${key}=${data[key]};max-age=${age * 1000}`
    })
    },

    getCookie(cookieName: string) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]?.trim();
        if (cookie.startsWith(cookieName + '=')) {
        return decodeURIComponent(cookie.substring(cookieName.length + 1));
        }
    }
    return null;
    },



    isValidEmail: (email: string) => {
    let eRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return eRegex.test(email)
    },

    isValidWebsite: (website: string) => {
    let regex = /^(https?\:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(\/[\w]*)*$/;
    return regex.test(website)
    },

    isValidName: (name: string) => {
    let eRegex = /^[A-Za-z .]+$/;
    return eRegex.test(name)
    },

    isValidCompanyName: (name: string) => {
    let eRegex = /^[A-Za-z][A-Za-z0-9&() .-]+$/;
    return eRegex.test(name)
    },

    isValidString: (data: string) => {
    let regex = /^[A-Za-z ]+$/
    return regex.test(data)
    },

    firstLetterCapital: (val: string) => {
    return val?.trim() !== ""
        ? val[0].toUpperCase() + val.slice(1)
        : ""
    },

    removeUnderscore: (text: string) => {
    if (!text) return "";
    let array = text.split("_");
    let string = "";
    array.forEach((item, i) => {
        string += item + " ";
    });
    return string;
    },

    removeUnderscoreAndCapitalize: (status: string) => {
    if (!status) return "";
    let arr = status.split("_");
    arr.forEach((val, i) => {
        arr[i] = val[0].toUpperCase() + val.slice(1);
    });

    return arr.join(" ");
    },

    convertStringToSnailCase: (data: string) => {
    if (!data) return "";
    const array = data.toLowerCase().split(" ");
    return array.join("_");
    },

    convertBlobToFile(blob: Blob, fileName: string): File {
    const file: any = blob;
    file.lastModifiedDate = new Date();
    file.name = fileName;
    return file;
    },

    convertBinaryDataToBlob(data: any, dataType: string): Blob {
    const binaryData = [];
    binaryData.push(data);
    return new Blob(binaryData, { type: dataType });
    },

    downloadBlob(blob: Blob, fileName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.setAttribute("download", fileName);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        resolve(true);
    });
    },

    async convertUrlToFile(url: string, type: string, name: string) {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = {
        type: type,
    };
    return new File([data], name, metadata);
    },

    logout() {
    methods.deleteCookieToken()
    window.location.reload()
    },
};
  
  
  