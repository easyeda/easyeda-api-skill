# Extensions Marketplace

EasyEDA Extensions Marketplace is under developing, you can refer China site [https://ext.lceda.cn](https://ext.lceda.cn),, which is a professional platform for users to download and share extensions.

If you want to learn how to develop extensions, please refer to the [how-to-start](./how-to-start), which describes in detail how to install the development environment and build your own EasyEDA Pro extension from scratch.

## Publishing Your Extension

When you have fully verified the functionality of the extension you have developed and wish to share it with other users, please visit the [EasyEDA Extensions Marketplace](https://ext.easyeda.com/) and click the **Extension Management** button in the upper right corner:

![](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_112144.jpg)

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

Select your compiled `.eext` file in the upload pop-up window and upload it. The first uploaded extension will automatically create a namespace into which all subsequent uploads of the extension (identified by `uuid`) will be grouped.

You can view the extension's name, description, version, install count, updated time, and other information on the namespace cover:

![](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_135832.jpg)

After the extension is uploaded, it will automatically enter the review process. After approval, it will be listed in the marketplace:

![](/storage/images/cn/api/guide/extensions-marketplace/extensions-marketplace_20250523_093133.jpg)

After waiting for the review to complete, the review status will change to **Passed**. If there is a case that the review is not passed, please check the reason in the message notification in time and check the non-compliant content in the extension:

![](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_140419.jpg)

After approval, other users will be able to view your extension details and download the uploaded version:

![](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_140709.jpg)

You can view the extension's detail page, where the `README.md` and `CHANGELOG.md` contents of the extension file will be displayed:

![](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_141157.jpg)

All published versions of the extension are listed in the history:

![](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_141328.jpg)

You can leave ratings and reviews of the extension in the comments section:

![](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_141456.jpg)

You can also downgrade the namespace of an extension at any time on the extension management page. This does not affect the status of uploaded versions, and you can also individually unpublish a specific version in the versioning management.
