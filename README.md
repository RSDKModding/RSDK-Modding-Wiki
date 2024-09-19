<h1>
    <a href="#rsdk">
        <img width="120" align="left" src="docs/favicon.svg">
    </a>
    RSDK<span style="font-weight: 200;"> Modding Wiki</span>
</h1>

GitHub Page with documentation, tools and guides for modding Retro Engine games, powered by [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) and inspired by [HedgeDocs](https://github.com/HedgeDocs/HedgeDocs.github.io).

## Contributing

This wiki is written in markdown, just like GitHub's own markdown files! One of the best ways to write markdown text files is to use [Visual Studio Code](https://code.visualstudio.com/), which allows you to preview the page you are currently typing by pressing CTRL+Shift+V, making it easy to see how your page might look like on the website. For a more accurate look, you absolutely should setup the website locally by following the instructions in the [Testing](#testing) section.

We appreciate every contribution that's made to the wiki, as every single one helps the modding community to grow and make better mods.

### Adding New Pages

Adding a new page to the wiki is easy! After creating a fork of this repository, edit it by following these steps:
1. Add your page in the appropriate place by editing the `mkdocs.yml` file. You can even create new sections if you don't see one that fits your needs!
2. Create a markdown file in the location you specified in the previous step, and that's it!

After you added your contributions, open a pull request, and if approved, your page will be shown in the wiki for the whole world to see.

### Material for MkDocs features

Since this wiki uses Material for MkDocs, you might want to check its [references](https://squidfunk.github.io/mkdocs-material/reference/) to better understand its features. You can use plain markdown, but you can also use admonitions, buttons, and even icons from Font Awesome.

### Testing

You can test your changes locally before committing. To do so:

- Install [Python](https://www.python.org/downloads/)
- Install Material For MkDocs: `pip install mkdocs-material mkdocs-glightbox --upgrade`
- Serve webpage locally: `mkdocs serve`
    - You can also build a static site instead, using `mkdocs build`

The served webpage will auto refresh whenever you make changes to the files.
