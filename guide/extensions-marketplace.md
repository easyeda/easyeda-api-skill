# 扩展广场

嘉立创 EDA 扩展广场（[https://ext.lceda.cn/](https://ext.lceda.cn/)）已正式上线，这是一个为用户提供扩展下载与分享服务的专业平台。

如果你希望学习如何开发扩展，请参阅 [如何开始](./how-to-start) 章节，这里详细地描述了如何从零开始安装开发环境并构建属于您的嘉立创 EDA 专业版扩展组件。

## 发布你的扩展

当你已经完整验证你开发的扩展的功能，并希望将其分享给其它用户时，请访问 [嘉立创 EDA 扩展广场](https://ext.lceda.cn)，然后点击右上角的 **扩展管理** 按钮：

![图 0](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_112144.jpg)

进入扩展管理页面，该页面支持扩展的上传、发布及版本管理等功能。

点击 **扩展上传** 按钮即可上传您的第一个扩展，上传的扩展需满足以下要求：

1. 扩展 `extension.json` 应包含以下属性项：名称（`name`）、唯一标识符（`uuid`）、显示名称（`displayName`）、描述（`description`）、版本（`version`）以及许可证信息（`license`）；
2. 至少选择并填写一个或多个符合要求的扩展类型（`categories`）。
3. 扩展需提供自定义图标，不得使用 SDK 中提供的默认 `logo`。推荐图标尺寸比例为 `1:1`，格式须为 PNG 或 JPEG，内容需清晰且无侵权风险，文件大小不得超过 `5 MiB`；
4. 确保扩展的入口文件（`entry`）存在且有效；
5. 不同扩展（具有不同 `uuid`）的 `name` 属性值不得重复；
6. 在 `README.md` 文件中详细说明扩展的功能及使用方法；
7. 如有必要的话，请在 `CHANGELOG.md` 文件中记录扩展的更新日志；
8. 扩展中 **禁止** 包含个人隐私信息，例如电话号码等。

在上传弹窗中选择你编译完成的 `.eext` 文件并上传，首次上传的扩展将会自动创建一个命名空间，后续上传的该扩展（以 `uuid` 识别）的其他版本都将归入该命名空间。

您可以在命名空间的封面查看扩展的名称、描述、版本、安装量、更新时间等信息：

![图 2](/storage/images/cn/api/guide/extensions-marketplace/extensions-marketplace_20250523_093529.jpg)

上传扩展后会自动进入审核流程，审核通过后将上架到扩展广场:

![图 1](/storage/images/cn/api/guide/extensions-marketplace/extensions-marketplace_20250523_093133.jpg)

等待审核完成后，审核状态将变为 **已通过**。如果出现审核不通过的情况，请及时查看信息通知中的原因，并检查扩展中不符合要求的内容：

![图 3](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_140419.jpg)

审核通过后，其他用户将能够查看您的扩展详情并下载已上传的版本：

![图 4](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_140709.jpg)

您可以查看扩展的详情页面，其中扩展文件中的 `README.md` 和 `CHANGELOG.md` 内容将在此展示：

![图 5](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_141157.jpg)

历史版本中会列出所有已发布的扩展版本：

![图 6](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_141328.jpg)

您可以在评论区留下对扩展的评分和评价：

![图 7](/storage/images/cn/api/guide/how-to-publish/how-to-publish_20250428_141456.jpg)

您还可以在扩展管理页面随时下架扩展的命名空间，此操作不会影响已上传版本的状态。同时，您也可以在版本管理中单独取消发布某个特定版本。
