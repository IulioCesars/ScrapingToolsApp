import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

export async function DownloadFile(url: string,) {
    await Linking.openURL(url);
    //await WebBrowser.openBrowserAsync(url);
    //WebBrowser.dismissBrowser();
}