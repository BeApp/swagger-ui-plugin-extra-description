import { ExtraDescriptions, ExtraDescription } from './extra-description';

export const ExtraDescriptionPluginFactory = (extraDescriptions) => {
  return (system) => {
    return {
      rootInjects: {
        extraDescriptions: extraDescriptions
      },
      components: {
        ExtraDescriptions: ExtraDescriptions,
        ExtraDescription: ExtraDescription
      },
      wrapComponents: {
        InfoContainer: (Original, { React }) => (props) => {
          const ExtraDescriptions = system.getComponent("ExtraDescriptions", true)

          return <div>
            <Original {...props} />
            <ExtraDescriptions {...props} />
          </div>
        },
      }
    }
  }
}
