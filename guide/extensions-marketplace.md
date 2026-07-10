# Extensions Marketplace

EasyEDA Extensions Marketplace site [https://jlcext.com](https://jlcext.com), which is a professional platform for users to download and share extensions.

If you want to learn how to develop extensions, please refer to the [how-to-start](./how-to-start), which describes in detail how to install the development environment and build your own EasyEDA Pro extension from scratch.

## Publishing Your Extension

When you have fully verified the functionality of the extension you have developed and wish to share it with other users, please visit the [EasyEDA Extensions Marketplace](https://jlcext.com/) and click the **Extension Management** button in the upper right corner:

![图 0](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260617_210219.jpg)


Enter the extension management page, which supports uploading, publishing and versioning of extensions.

Click the **Extension Upload** button to upload your first extension that meets the following requirements:

1. The extension `extension.json` should contain the following attributes: `name`, `uuid`, `displayName`, `description`, `version`, and `license`;
2. select and fill in at least one or more of the required extension types (`categories`);
3. the extension must provide a custom icon and must not use the default `logo` provided in the SDK, the recommended icon size ratio is `1:1`, the format must be PNG or JPEG, the content must be clear without risk of infringement, and the file size must not exceed `5 MiB`;
4. make sure that the entry file (`entry`) of the extension exists and is valid;
5. the value of the `name` attribute must not be duplicated across extensions with different `uuid`;
6. include a detailed description of the extension's functionality and usage in the `README.md` file;
7. if necessary, keep an change log for the extension in the `CHANGELOG.md` file;
8. the extension **DOESN'T** contain private information, such as your phone numbers.

![图 0](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260603_163928.png)

Select your compiled `.eext` file in the upload pop-up window and upload it. The first uploaded extension will automatically create a namespace into which all subsequent uploads of the extension (identified by `uuid`) will be grouped.

You can view the extension's name, description, version, install count, updated time, and other information on the namespace cover:

![图 4](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260702_172246.png)


After the extension is uploaded, it will automatically enter the review process. After approval, it will be listed in the marketplace:

![图 5](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260702_172309.png)


After waiting for the review to complete, the review status will change to **Passed**. If there is a case that the review is not passed, please check the reason in the message notification in time and check the non-compliant content in the extension:

![图 6](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260702_172321.png)

After approval, other users will be able to view your extension details and download the uploaded version:

![图 7](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260702_172403.png)

You can view the extension's detail page, where the `README.md` and `CHANGELOG.md` contents of the extension file will be displayed:

![图 8](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260702_172447.png)

All published versions of the extension are listed in the history:

![图 9](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260702_172548.png)

You can leave ratings and reviews of the extension in the comments section:

![图 10](/storage/images/en/api/guide/extensions-marketplace/extensions-marketplace_20260702_172603.png)

You can also downgrade the namespace of an extension at any time on the extension management page. This does not affect the status of uploaded versions, and you can also individually unpublish a specific version in the versioning management.
