module.exports.AppCompatViewInflater = (req, res) => {
  res.status(200).send({
    hCode: "public class AppCompatViewInflater",

    des1: 'This class is used by AppCompat to automatically "substitute" all usages of core Android widgets inflated from layout files by the AppCompat extensions of those widget.',

    des2: `This class two main responsibilities: the first is to 'inject' our tinted views in place of the framework versions in layout inflation; the second is backport the android:theme functionality for any inflated widgets. This include theme inheritance from its parent.`,

    list:{
      success:false,
      hList:`In order to provide your own extensions, follow these steps:`,
      list:[
          `Extend this class, or the relevant subclass if you're using the Material components library`,

          `Override one or more of the createXYZ methods`,

          `Add the viewInflaterClass attribute on your application theme. The value of the attribute should be the fully-qualified class name of your custom inflater class.`
      ]
    },

    summary: {
      success: true,

      PublicConstructor: {
        success: false,

        constructor: [
          {
            name: "AppCompatViewInflater()",
            des: "yah eak accha constructor hai",
            dep: false,
            longDes: false,
          },
        ],
      },
      publicMethod: {
        success: true,

        method: [
          {
            dep: false,
            dataTypeName: `final @Nullable View`,
            code: `createView(
                    @Nullable View parent,
                    @NonNull String name,
                    @NonNull Context context,
                    @NonNull AttributeSet attrs,
                    boolean inheritContext,
                    boolean readAndroidTheme,
                    boolean readAppTheme,
                    boolean wrapContext
                )`,
            des: `Creates an AppCompat-compatible widget by automatically "substituting" all usages of core Android widgets with the AppCompat extensions of those widgets.`,
            longDes: `Creates an AppCompat-compatible widget by automatically "substituting" all usages of core Android widgets with the AppCompat extensions of those widgets.

                Most developers should not call this method directly. Instead, use the layout inflater provided by getLayoutInflater or call createView.`,
            parmater: {
              success: true,

              parameter: [
                {
                  dataTypeName: `@Nullable View parent`,
                  des: `the hierarchical parent of the view, if any`,
                },
                {
                  dataTypeName: `@NonNull String name`,
                  des: `class name of the view, must be a simple class name like TextView for core Android widgets`,
                },
              ],
            },
          },
        ],
      },
      protectedMethod: {
        success: true,
        method: [
          {
            dep: false,
            name: `createAutoCompleteTextView`,
            dataTypeName: `@NonNull AppCompatAutoCompleteTextView`,
            code: `createAutoCompleteTextView(Context context, AttributeSet attrs)`,
            fullCode: `protected @NonNull AppCompatAutoCompleteTextView createAutoCompleteTextView(Context context, AttributeSet attrs)`,
            des: "",
            longDes: "",
          },
          {
            dep: false,
            name: `createButton`,
            dataTypeName: `@NonNull AppCompatAutoCompleteTextView`,
            code: `createAutoCompleteTextView(Context context, AttributeSet attrs)`,
            fullCode: `protected @NonNull AppCompatAutoCompleteTextView createAutoCompleteTextView(Context context, AttributeSet attrs)`,
            des: "",
            longDes: "",
          },
          {
            dep: false,
            name: `createCheckBox`,
            dataTypeName: `@NonNull AppCompatAutoCompleteTextView`,
            code: `createAutoCompleteTextView(Context context, AttributeSet attrs)`,
            fullCode: `protected @NonNull AppCompatCheckBox createCheckBox(Context context, AttributeSet attrs)`,
            des: "",
            longDes: "",
          },
        ],
      },
    },
  });
  console.log("okh");
};
