# Interface Stabilization

Our priority in maintaining the extension API is efficient abstraction and interface stability. It's important for users that extensions don't fail to work on a regular basis, and this is especially true and important considering that EasyEDA is currently a rapidly evolving product.

On the other hand, we also want to strike the right balance between delivering new features quickly and maintaining backward compatibility, and here's how we intend to do that.

## API Version Control

Changes to the extension API will be identified as `major.minor.patch`. `major` indicates a major version, `minor` indicates a minor version, and `patch` indicates a fix.

### Major Version

::: info
The EasyEDA Professional Edition Extension API has its own release version number, which is not equivalent to the EasyEDA version number. In general, major updates to the Extension API will follow the major or minor releases of EasyEDA.
:::

Changes to existing APIs that will be made available as major releases may have a noticeable impact on extensions and require the authors of extensions that utilize those APIs to update their code.

This includes changes to the API itself (e.g., removing deprecated methods) or changes to API behavior.

Extensions are not automatically upgraded to these versions, and in order to keep existing extensions working, the EasyEDA Professional API development team is committed to extending the lifecycle of deprecated methods as long as possible.

### Minor Version

New API interfaces and bug fixes will be provided as minor releases, and these new APIs will automatically be available to extensions as soon as they are run in the latest version of EasyEDA.

If there are bugs in the API, we may, at our discretion, release bug fixes as a minor update, depending on whether we feel that certain extensions may break as a result of fixing the bugs. While any change in API behavior could theoretically make extensions work improperly, it would incur a lot of unnecessary additional overhead for extension authors and us to treat every bug fix as a major change.

### Patch

We release a fix update when we fix an urgent new issue, make a minimal change to the API, or even just change the content of the documentation.

We may change the API's TypeScript type definition in the form of a break in the fix update. In the TypeScript world, Type and Script are two different things. As such, changes to Type do not affect existing code or cause breaks in released extensions, and having types that accurately represent the latest state of the API is more important than having perfect backward compatibility because types are easy to update. Typically, type changes only involve renaming certain types.

## APIs for the Development Phase

Development-stage APIs are APIs that are only available when the extension is set to a development version, which allows extension developers to try out new APIs and provide feedback to the EasyEDA Professional Extension API development team on whether the APIs are meeting usage requirements and/or working in any unexpected ways. APIs in development will be prominently identified within the documentation.
