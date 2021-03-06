import React from "react"

// Forked from https://github.com/swagger-api/swagger-ui/blob/aee8cc5a17/src/core/utils.js
const createDeepLinkPath = (str) => typeof str == "string" || str instanceof String ? str.trim().replace(/\s/g, "%20") : ""
const escapeDeepLinkPath = (str) => createDeepLinkPath(str).replace(/%20/g, "_")

export class ExtraDescriptions extends React.Component {
  render() {
    return <div id="extra-descriptions">
      {
        this.props.extraDescriptions
          .map((extraDescription, key) => <ExtraDescription {...this.props}
            key={key}
            title={extraDescription.title}
            forceOpen={extraDescription.forceOpen}
            content={extraDescription.content}
          />)
      }
    </div>
  }
}

/**
 * This component display a collapsible section with markdown content.
 * It was inspired by https://github.com/swagger-api/swagger-ui/blob/cc408812fc/src/core/components/operation-tag.jsx
 */
export class ExtraDescription extends React.Component {
  render() {
    const Markdown = this.props.getComponent("Markdown", true)
    const Collapse = this.props.getComponent("Collapse")
    const DeepLink = this.props.getComponent("DeepLink")

    const { deepLinking } = this.props.getConfigs()

    const isDeepLinkingEnabled = deepLinking && deepLinking !== "false"

    const tag = this.props.title
    const forceOpen = this.props.forceOpen || false
    const isShownKey = ["extra-description", tag]
    const showTag = forceOpen || this.props.layoutSelectors.isShown(isShownKey)

    return <div className={showTag ? "opblock-tag-section is-open" : "opblock-tag-section"}>
      <h5
        onClick={() => this.props.layoutActions.show(isShownKey, !showTag)}
        className="opblock-tag"
        style={{ fontSize: '20px' }}
        id={isShownKey.map(v => escapeDeepLinkPath(v)).join("-")}
        data-tag={tag}
        data-is-open={showTag}
      >
        <DeepLink
          enabled={isDeepLinkingEnabled}
          isShown={showTag}
          path={createDeepLinkPath(tag)}
          text={tag} />

        {(!forceOpen) &&
          <button
            className="expand-operation"
            title={showTag ? "Collapse description" : "Expand description"}
            onClick={() => this.props.layoutActions.show(isShownKey, !showTag)}>

            <svg className="arrow" width="20" height="20">
              <use href={showTag ? "#large-arrow-down" : "#large-arrow"} xlinkHref={showTag ? "#large-arrow-down" : "#large-arrow"} />
            </svg>
          </button>
        }
      </h5>

      <Collapse isOpened={showTag}>
        <Markdown source={this.props.content} />
      </Collapse>
    </div>
  }
}
