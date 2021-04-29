import { ExtraDescription } from './extra-description';

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
        InfoContainer: (Original, { React }) => (props) => {
          const ExtraDescription = system.getComponent("ExtraDescription", true)

          return <div>
            <Original {...props} />
            <ExtraDescription {...props} />
          </div>
        },
      }
    }
  }
}
