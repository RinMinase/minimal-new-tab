# Minimal New Tab

<p align="center">
    <a href="https://svelte.dev/">
        <img alt="Svelte" src="https://img.shields.io/badge/Svelte-%5E5.0-FF3E00.svg?logo=svelte&style=for-the-badge&logoColor=white">
    </a>
    <a href="https://vitejs.dev/">
        <img alt="Vite" src="https://img.shields.io/badge/Vite-%5E6.0-646CFF.svg?logo=vite&style=for-the-badge&logoColor=white">
    </a>
</p>

## Introduction
An extremely lightweight, minimalistic new tab. Contents of it are only a dark/light mode switcher, date and time, search bar.

![Light](https://github.com/RinMinase/minimal-new-tab/blob/main/.github/sample-light.png?raw=true)
![Dark](https://github.com/RinMinase/minimal-new-tab/blob/main/.github/sample-dark.png?raw=true)


## Adding the extension to Chrome

**Note**: Due to Google Chrome's limitation on installing non-store CRX (Chrome Extensions) files, you need to need to enable `Developer mode` install it with the built files.

1. Navigate to the [releases section](https://github.com/RinMinase/minimal-new-tab/releases) and download the latest release, or [click here](https://github.com/RinMinase/minimal-new-tab/releases/latest/download/newtab.zip) to download it.

2. Unzip the file using your prefered tool.

3. **Important:** Place the extracted folder in a permanent location on your machine
    - Deleting the file would lead to a 404 on the new tab page as the file could not be located anymore

4. Navigate to Google Chrome's extension page `(chrome://extensions/)` and toggle `Developer mode` on.

5. Click `Load unpacked` and select the folder you unzipped in Step 2.

6. Open a new tab. This should show a dialog to either keep or restore the previous "new tab page". Select `Keep`.

7. That's all! Enjoy.


## Updating the extension in Chrome

1. Navigate to the [releases section](https://github.com/RinMinase/minimal-new-tab/releases) and download the latest release, or [click here](https://github.com/RinMinase/minimal-new-tab/releases/latest/download/newtab.zip) to download it.

2. Unzip the file using your prefered tool.

3. Navigate to the folder where you saved the previous version, then replace all the files in it with the files unzipped from Step 2.

4. Navigate to Google Chrome's extension page `(chrome://extensions/)` and locate the previously added extension.

5. You should be able to see a "Reload" icon near the toggle switch of the extension.

6. Click the "Reload" button.

7. You should see any information such as the version be changed.


## Compiling the project

**Requirements:**
- [Bun](https://bun.sh/) (preferrable)
    - or NodeJS

1. Clone the project

    ```
    git clone https://github.com/RinMinase/minimal-new-tab.git
    cd minimal-new-tab
    ```

2. Install the necessary dependencies

    ```bash
    bun install
    ```

    Or `yarn install` or `npm install` if you are using `NodeJS` instead of `Bun`.

3. Build the project

    ```bash
    bun run build
    ```

    Or `yarn build` or `npm build` if you are using `NodeJS` instead of `Bun`.

    This generates a `/dist` folder with the built files in it.

4. Open Google Chrome, and navigate to its extension page `(chrome://extensions/)` and toggle `Developer mode` on.

5. Click `Load unpacked` and select the `/dist` folder generated from Step 3 earlier

6. Open a new tab. This should show a dialog to either keep or restore the previous "new tab page".Select `Keep`.

7. That's all! Enjoy.


## FAQ

### Why?

Previously I kept using momentum, but ever since it added its `Plus` tier subscription it has been riddled with stuff I do not want such as:
- Current weather (why? I can see the weather outside)
- Mantra
- Focus Mode
- Login
- Notes / Todo List
- Links

And now... Another [AI](https://momentumdash.com/blog/Ask-ai) slapped into another product.

You can turn most of the things I mentioned earlier to off, but turning it "off" is just hiding the feature. RAM is still _most likely_ being used from these things despite being off.

Memory Usage:
| Tool                    | RAM Usage (based on Chrome)                |
| ----------------------- | ------------------------------------------ |
| Momentum                | 100MB (which sometimes spike to 130MB)     |
| Momentum (on page load) | 160MB (drops to 100MB after a few seconds) |
| This                    | 30MB                                       |

A memory savings worth of 70MB, a paltry size, yet is still savings worth for the mere 8GB RAM on Mac. 

So I decided, yet again, to branch off and create my own. [XKCD Link Here :)](https://imgs.xkcd.com/comics/standards_2x.png)

### Why not upload to the Chrome Store?

This would ease the process of you installing and updating this extension.

But... I would need to pay a one-time fee of $5 for this basic extension, which no one would probably use. Ref: https://developer.chrome.com/docs/webstore/register.

Besides, if you are suspicious of this extension, you may check the mere 200 lines of code in this repository if there is anything which would take your data. Which, background tasks like those would chew up the precious memory I was complaining on in the first place. :)

Lastly, [here you go](https://www.virustotal.com/gui/search/https%253A%252F%252Fgithub.com%252FRinMinase%252Fminimal-new-tab%252Freleases%252Flatest%252Fdownload%252Fnewtab.zip) (VirusTotal link for the latest release). Not sure if this would satisfy you.
