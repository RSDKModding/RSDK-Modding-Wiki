# Contributing

The RSDK Modding Wiki wiki is powered by [Zensical](https://zensical.org/), which uses Markdown files - just like GitHub! One of the best ways to write pages for Zensical sites is to use [Visual Studio Code](https://code.visualstudio.com/) with the [Zensical Studio](https://zensical.org/studio/) extension, which allows you to preview the page you are currently typing by clicking the `Open Preview` button on top of the active editor. To see how your changes look on the full website, you absolutely should setup the website locally by following the instructions in the [Testing](#testing) section.

We appreciate every contribution that's made to the wiki, as every single one helps the modding community to grow and make better mods.

## Adding New Pages

Adding a new page to the wiki is easy! After creating a fork of this repository, edit it by following these steps:
1. Add your page in the appropriate place by editing the `mkdocs.yml` file. You can even create new sections if you don't see one that fits your needs!
2. Create a Markdown file in the location you specified in the previous step, and that's it!

After you added your contributions, open a pull request, and if approved, your page will be shown in the wiki for the whole world to see.

## Zensical features

Since this wiki uses Zensical, you might want to check its [documentation](https://zensical.org/docs/authoring/markdown/) to better understand its features. You can use plain Markdown, but you can also use admonitions, buttons, and even icons from Font Awesome.

## Testing

You can test your changes locally before committing. To do so:

- Install [Python](https://www.python.org/downloads/)
- Install Zensical: `pip install zensical --upgrade`
- Serve webpage locally: `zensical serve --open`
    - You can also build a static site instead, using `zensical build --clean`

The served webpage will automatically refresh whenever you make changes to the files.

## Writing Guidelines

### Formatting

Documents in this wiki use the default [formatting](https://zensical.org/docs/studio/write/formatting/) rules defined in Zensical Studio. If you're using Studio, you can automatically format the current file you're writing by pressing Shift+Alt+F or by right clicking and selecting `Format Document`.

We currently don't strictly enforce formatting on documents in PRs, however this may change whenever a linter is introduced to Zensical.

### Multimedia Files

Multimedia files (images, videos, or audio) should be included in an appropriate location within the `docs/assets` folder. Do not use external links for them.

### Scope

This wiki currently covers Retro Engine versions 1-5(U), as well as all games officially released for them. Given the work-in-progress state of the wiki, we would like to focus on finishing documentation for those RSDK versions before expanding to cover later versions of the engine.

In addition to the official releases of RSDK games, this wiki covers the decompilations for Retro Engine versions 2-5(U) and Sonic Mania, as well as GameAPI/ModAPI. However, this wiki only documents the master [RSDKModding](https://github.com/RSDKModding) repositories for these projects. Do not add documentation, guides, etc. for any unofficial forks or ports of the decompilations or APIs.

### AI Policy

Use of AI/LLMs (ChatGPT, Claude, Grok, etc.) for any portion of the repo is **not allowed for any reason**. This includes research, analysis, writing, images, proofreading, and everything else.

LLM models are trained on sources of unknown origin and may output documentation from leaked internal sources that could cause legal issues for the wiki. AI also does not actually understand the specifics of the subjects that we document, leading to AI-generated text about it being full of false information and misconceptions.

Any PRs that include content generated or assisted by AI will be closed without debate.
