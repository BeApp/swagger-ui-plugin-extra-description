export const ExtraDescriptionPluginFactory = (extraDescriptions) => {
  return (system) => {
    return {
      rootInjects: {
        extraDescriptions: extraDescriptions
      },
      components: {
        ExtraDescription: ExtraDescription
      },
      wrapComponents: {
        InfoContainer: (Original, system) => (props) => {
          const ExtraDescription = system.getComponent("ExtraDescription", true)

          return <div>
            <Original {...props} />
            <ExtraDescription {...props} extraDescriptions={extraDescriptions} />
          </div>
        },
      }
    }
  }
}
