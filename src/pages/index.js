// import { GrGatsbyjs } from "@react-icons/all-files/gr/GrGatsbyjs"
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"
import { Button } from "@react-md/button"
import { TextArea, TextField } from "@react-md/form"
import { FontIcon } from "@react-md/icon"
import { Link } from "gatsby"
import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Hr from "../components/Hr"
import Image from "../components/image"
import Layout from "../components/Layout"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"



class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input1: "",
      input2: "",
      message:
        "Copy text to the Clipboard in React without a package - Clue Mediator",
      btnText: "Copy to Clipboard",
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(input, value ) {
    this.setState({
      [input]: value,
      copied: false,
      
    }
  
    )
  }

  // handle copy to clipboard
  copyToClipboard = e => {
    this.refs.textArea.select()
    document.execCommand("copy")
    e.target.focus()
    this.setState({ btnText: "Copied!" })
  }

  state = { loading: false, msg: null }
  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/token-hider")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.message }))
  }

  render() {
    const { message, btnText } = this.state
    const { loading, msg } = this.state
    const siteTitle = "Home"


    return (
      <Layout>
        <SEO title={siteTitle} keywords={[`gatsby`, `application`, `react`]} />
        <Title>{siteTitle}</Title>
        <div>
        
          <div className="flex flex-col lg:flex-row justify-between divide-x-0 lg:divide-dashed lg:divide-x-2 divide-red-700">
            <div className="mr-0 lg:mr-4">
              <P className="text-base font-semibold text-teal-400 uppercase tracking-wider">
                Welcome to your new Gatsby + Netlify Functions + Netlify
                Identity site
              </P>
              <P className="mt-4 text-lg text-gray-300 max-w-3xl">
                This site has statically generated marketing pages like this one
                and{" "}
                <Link className="link" to="/page-2/">
                  page 2.
                </Link>{" "}
              </P>
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div>
                  <P className="mt-4 text-lg text-gray-300 max-w-3xl">
                    It also has a dynamically generated clientside app guarded
                    by authentication:
                  </P>
                  <div className="mt-6 flex">
                    <a
                      href="https://youtu.be/bueXJInQt2c"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-start text-lg leading-6 font-medium text-teal-400 hover:text-teal-300 transition ease-in-out duration-150"
                    >
                      <svg
                        width="24"
                        height="24"
                        className="flex-shrink-0 mr-3 h-9 w-9 transition ease-in-out duration-150"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <circle
                          vectorEffect="non-scaling-stroke"
                          cx={12}
                          cy={12}
                          r={9}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                      <span className="mt-1.5 transition ease-in-out duration-150 sm:hidden">
                        Watch a demo
                      </span>
                      <span className="hidden transition ease-in-out duration-150 sm:inline mt-1.5">
                        Watch the Youtube walkthrough
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <a
                    className="mt-3 flex items-start rounded-lg border border-gray-700 px-5 py-3 text-base font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150"
                    href="https://github.com/sw-yx/jamstack-hackathon-starter"
                  >
                    view source here
                  </a>
                  <Link
                    className="mt-3 flex items-start rounded-lg border border-gray-700 px-5 py-3 text-base font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150"
                    to="/app/"
                  >
                    <b>Go to App (with Netlify Identity)</b>
                  </Link>
                  <a
                    className="mt-3 flex items-start px-5 py-3"
                    href="https://app.netlify.com/start/deploy?repository=https://github.com/sw-yx/jamstack-hackathon-starter&stack=cms"
                  >
                    <svg
                      className="w-full"
                      width="146"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 146 32"
                    >
                      <rect width="146" height="32" rx="6" fill="#15847D" />
                      <path
                        d="M31.012 21v-9.953h2.94c.879 0 1.658.196 2.337.588a4.002 4.002 0 011.586 1.668c.374.72.56 1.545.56 2.474v.5c0 .943-.189 1.772-.567 2.488a3.933 3.933 0 01-1.606 1.654c-.693.387-1.488.581-2.386.581h-2.864zm1.73-8.559v7.178h1.127c.907 0 1.602-.282 2.085-.848.488-.57.736-1.385.745-2.447v-.554c0-1.08-.234-1.904-.704-2.474-.47-.57-1.15-.855-2.044-.855h-1.21zM43.455 21.137c-1.053 0-1.907-.33-2.564-.992-.651-.665-.977-1.549-.977-2.652v-.205c0-.738.141-1.397.424-1.976a3.27 3.27 0 011.203-1.36 3.172 3.172 0 011.723-.485c1.007 0 1.784.321 2.33.964.552.642.828 1.551.828 2.727v.67h-4.833c.05.61.253 1.094.608 1.45.36.355.811.533 1.354.533.76 0 1.38-.308 1.859-.923l.896.854a3.012 3.012 0 01-1.19 1.032 3.72 3.72 0 01-1.661.363zm-.198-6.337c-.456 0-.825.16-1.108.478-.278.32-.456.764-.533 1.333h3.165v-.123c-.036-.556-.184-.975-.444-1.258-.26-.287-.62-.43-1.08-.43zM54.394 17.377c0 1.144-.26 2.058-.78 2.741-.519.68-1.216 1.019-2.091 1.019-.811 0-1.46-.267-1.948-.8v3.507h-1.661v-10.24h1.53l.07.752c.487-.593 1.15-.89 1.988-.89.903 0 1.61.338 2.12 1.013.515.67.772 1.601.772 2.795v.103zm-1.654-.144c0-.738-.148-1.324-.445-1.756-.291-.433-.71-.65-1.257-.65-.68 0-1.167.28-1.463.841v3.281c.3.574.793.861 1.476.861.529 0 .941-.211 1.238-.635.3-.429.45-1.076.45-1.942zM57.773 21h-1.661V10.5h1.66V21zM59.477 17.233c0-.724.143-1.376.43-1.955a3.12 3.12 0 011.21-1.34c.52-.314 1.117-.471 1.791-.471.998 0 1.807.321 2.427.964.625.642.962 1.495 1.012 2.556l.007.39c0 .73-.142 1.38-.424 1.955a3.08 3.08 0 01-1.203 1.333c-.52.315-1.121.472-1.805.472-1.044 0-1.88-.347-2.509-1.04-.624-.697-.936-1.624-.936-2.782v-.082zm1.66.144c0 .761.158 1.358.473 1.791.314.428.752.643 1.312.643s.996-.22 1.306-.657c.314-.437.471-1.078.471-1.92 0-.748-.161-1.34-.485-1.778-.319-.437-.754-.656-1.306-.656-.542 0-.973.216-1.292.65-.319.428-.478 1.07-.478 1.927zM70.436 18.621l1.504-5.017h1.77l-2.938 8.517c-.452 1.244-1.217 1.866-2.297 1.866-.242 0-.508-.04-.8-.123V22.58l.314.02c.42 0 .734-.077.944-.232.214-.15.382-.405.505-.765l.24-.636-2.598-7.363h1.791l1.566 5.018zM80.64 11.806v1.798h1.305v1.23h-1.306v4.129c0 .282.055.488.164.615.114.123.315.185.602.185.191 0 .385-.023.58-.069v1.286a4.091 4.091 0 01-1.093.157c-1.276 0-1.914-.704-1.914-2.113v-4.19h-1.217v-1.23h1.217v-1.798h1.661zM82.904 17.233c0-.724.143-1.376.43-1.955a3.12 3.12 0 011.21-1.34c.52-.314 1.117-.471 1.791-.471.998 0 1.807.321 2.427.964.624.642.962 1.495 1.012 2.556l.007.39c0 .73-.142 1.38-.424 1.955a3.08 3.08 0 01-1.203 1.333c-.52.315-1.121.472-1.805.472-1.044 0-1.88-.347-2.509-1.04-.624-.697-.936-1.624-.936-2.782v-.082zm1.66.144c0 .761.158 1.358.473 1.791.314.428.751.643 1.312.643.56 0 .996-.22 1.306-.657.314-.437.471-1.078.471-1.92 0-.748-.161-1.34-.485-1.778-.319-.437-.754-.656-1.306-.656-.542 0-.973.216-1.292.65-.319.428-.478 1.07-.478 1.927zM103.128 21h-1.73l-4.436-7.062V21h-1.73v-9.953h1.73l4.45 7.089v-7.09h1.716V21zM108.523 21.137c-1.084 0-1.969-.333-2.652-.998-.679-.666-1.019-1.552-1.019-2.66v-.19c0-.744.144-1.407.431-1.99a3.142 3.142 0 011.217-1.354c.528-.319 1.13-.478 1.804-.478 1.012 0 1.807.319 2.386.957.584.638.875 1.543.875 2.714v.806h-4.71c.064.483.255.87.574 1.162.324.292.732.438 1.224.438.761 0 1.356-.276 1.784-.827l.971 1.087c-.296.419-.697.747-1.203.984a3.983 3.983 0 01-1.682.349zm-.225-6.07c-.392 0-.711.132-.957.396-.242.264-.397.643-.465 1.135h2.748v-.158c-.009-.437-.128-.774-.356-1.011-.228-.242-.551-.363-.97-.363zM115.258 11.785v1.819h1.265v1.449h-1.265v3.691c0 .274.053.47.158.588.104.119.305.178.601.178.219 0 .413-.016.581-.048v1.497a4.064 4.064 0 01-1.196.178c-1.385 0-2.092-.7-2.119-2.099v-3.985h-1.08v-1.45h1.08v-1.818h1.975zM119.909 21h-1.983V10.5h1.983V21zM123.827 21h-1.982v-7.396h1.982V21zm-2.098-9.31c0-.297.098-.54.294-.732.2-.191.471-.287.813-.287.337 0 .606.096.807.287a.97.97 0 01.301.732c0 .3-.103.546-.308.738-.201.191-.467.287-.8.287s-.601-.096-.807-.287a.977.977 0 01-.3-.739zM126.201 21v-5.947h-1.1v-1.45h1.1v-.628c0-.83.237-1.472.711-1.928.479-.46 1.146-.69 2.003-.69.273 0 .608.045 1.005.136l-.021 1.531a2.514 2.514 0 00-.601-.061c-.743 0-1.114.349-1.114 1.046v.595h1.469v1.449h-1.469V21h-1.983zM133.64 18.204l1.368-4.6h2.119l-2.974 8.544-.164.39c-.442.966-1.171 1.45-2.187 1.45-.288 0-.579-.044-.875-.13V22.36l.3.007c.374 0 .652-.057.834-.17.187-.115.333-.304.438-.568l.232-.609-2.591-7.416h2.126l1.374 4.6zM12.764 11.236c.24.102 1.92.813 2.136.906.014.006.03.013.04.002a.839.839 0 01.769-.148c.011.003.025.006.035 0a.061.061 0 00.017-.02l1.654-2.561-.504-.504c-.322-.322-.484-.483-.67-.542a.8.8 0 00-.482 0c-.187.059-.348.22-.67.542l-2.325 2.325zM12.528 16.2l-1.924-2.804 1.797-1.797c.168.074.776.33 1.322.562l.01.004.915.387c.012.006.023.01.028.022.003.007.002.017 0 .024a.801.801 0 00.21.731c.011.012 0 .03-.011.045l-.006.008-1.824 2.825c-.005.008-.01.015-.017.02-.01.006-.023.003-.034 0a.91.91 0 00-.218-.029c-.065 0-.136.012-.208.025-.008.001-.016.003-.022-.002a.086.086 0 01-.018-.02zM19.634 13.807a.687.687 0 00-.198-.153l-.006-.002-.01-.005c-.009-.01-.012-.025-.01-.038l.309-1.89 1.45 1.45-1.508.642a.034.034 0 01-.013.002h-.006c-.002 0-.004-.003-.008-.006zM19.947 14.212l1.592-.673 1.55 1.55c.322.322.484.483.542.67a.785.785 0 01.022.083l-3.705-1.569-.006-.002c-.015-.006-.032-.013-.032-.028 0-.015.017-.023.032-.029l.005-.002zM23.59 16.34l-3.86-1.633c-.014-.005-.03-.011-.042-.005a.026.026 0 00-.01.009v.002a.692.692 0 01-.464.265c-.019 0-.022.024-.025.044l-.001.008-.426 2.61v.006c-.003.014-.006.028.004.037a.682.682 0 01.262.477c0 .018.021.022.04.025h.002l.006.002h.005l2.26.471 1.748-1.747c.265-.265.42-.42.5-.571zM18.915 18.645l2.024.416-2.874 2.874.492-3.024.001-.005c0-.003.001-.007.003-.01.003-.01.014-.015.024-.018l.005-.002a.74.74 0 00.278-.207c.01-.012.02-.022.036-.025h.011zM17.457 22.543l.594-3.625a.095.095 0 01.006-.018c.005-.013.01-.026-.001-.031a.703.703 0 01-.412-.47c0-.007-.002-.012-.007-.017a.066.066 0 00-.03-.014l-3.969-.818c-.01-.002-.02-.004-.03 0-.009.006-.014.015-.02.024v.002l-.009.014-.03.049-.004.005c-.004.005-.008.01-.009.017 0 .009.005.016.01.024l.005.005 3.582 5.177.324-.324zM13.18 17.997l3.6 5.223c-.239.236-.38.361-.539.411a.8.8 0 01-.482 0c-.187-.058-.348-.22-.67-.542l-3.597-3.597.94-1.457c.004-.007.008-.014.015-.019.01-.007.025-.004.037 0a.974.974 0 00.655-.033c.01-.005.022-.007.03 0a.082.082 0 01.012.014zM11.145 19.145l.9-1.397c.005-.007.009-.013.004-.02l-.003-.004-.002-.002a1.17 1.17 0 01-.052-.074c-.008-.012-.016-.026-.029-.026-.004 0-.009 0-.013.003l-1.63.695.825.825zM11.69 17.22l-1.735.735L8.91 16.91c-.178-.178-.306-.306-.396-.417l3.174.658.012.002c.02.003.041.007.041.025 0 .02-.023.03-.043.037l-.01.004zM8.333 15.957l3.579.75c.006.001.012.003.018 0a.065.065 0 00.02-.025c.04-.077.1-.147.158-.211.012-.012 0-.029-.01-.043l-.006-.008a885.15 885.15 0 01-1.845-2.667l-1.336 1.336c-.322.322-.483.483-.542.67a.8.8 0 00-.036.198zM16.14 12.287l1.626-2.521 1.527 1.527-.367 2.28-.001.005c0 .006-.001.011-.003.016-.004.008-.012.01-.02.011l-.009.002a.733.733 0 00-.218.115c-.005.004-.009.009-.016.01-.005 0-.013-.001-.017-.003l-2.328-.99-.004-.001c-.015-.006-.032-.013-.032-.028a.88.88 0 00-.12-.358l-.004-.008c-.012-.019-.024-.038-.014-.057zM16.193 13.208c-.012-.005-.028-.01-.04 0a.064.064 0 00-.012.015.812.812 0 01-.677.359.791.791 0 01-.113-.011l-.018-.003c-.019 0-.03.019-.041.036l-.003.004-1.793 2.776-.006.008c-.01.015-.023.033-.01.044.006.007.013.007.02.007.007 0 4.513-1.922 4.859-2.069l.004-.002c.015-.006.03-.012.03-.027v-.062c0-.036.006-.073.012-.105.001-.007.003-.016 0-.022-.005-.013-.018-.018-.03-.024l-2.182-.924zM13.729 16.99c-.016-.052-.032-.107-.034-.108l4.912-2.094s.007 0 .014.006c.027.027.05.045.071.062l.011.007c.01.006.02.011.021.022v.01l-.422 2.585-.001.01c-.003.02-.006.043-.025.043a.692.692 0 00-.549.339l-.002.003c-.005.01-.01.018-.02.023-.008.004-.02.002-.028 0l-3.917-.808c-.002 0-.016-.049-.031-.1z"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3>
                  Copy text to Clipboard -{" "}
                  <a className="link" href="https://www.cluemediator.com">
                    Clue Mediator
                  </a>
                </h3>
                <TextArea
                  id="copy-text"
                  ref="textArea"
                  value={message}
                  onChange={e =>
                    this.setState({
                      message: e.target.value,
                      btnText: "Copy to Clipboard",
                    })
                  }
                />
                <br />
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col">
                    <div>
                      <P>
                        Input1: <span>{this.state.input1}</span>
                      </P>
                    </div>
                    <div className="flex flex-grow">
                      <div className="inline-flex">
                        <TextField
                          aria-describedby="input1"
                          label="Input1"
                          name="input1"
                          id="value01"
                          onChange={e =>
                            this.handleChange("input1", e.target.value)
                          }
                        />
                      </div>
                      <div className="inline-flex">
                        <CopyToClipboard
                          text={this.state.input1}
                          onCopy={() => this.setState({ copied: true })}
                        >
                          <Button
                            theme="secondary"
                            buttonType="icon"
                            aria-label="copy-text"
                          >
                            {this.state.copied ? (
                              <AssignmentTurnedInIcon />
                            ) : (
                              <FontIcon>content_paste</FontIcon>
                            )}
                          </Button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1">
                    <P>
                      Input2: <span>{this.state.input2}</span>
                    </P>

                    <TextArea
                      aria-describedby="input2"
                      label="Input2"
                      name="input2"
                      id="value02"
                      onChange={e =>
                        this.handleChange("input2", e.target.value)
                      }
                    />
                    <CopyToClipboard
                      text={this.state.input2}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <Button
                        theme="secondary"
                        buttonType="icon"
                        aria-label="copy-text"
                      >
                        {this.state.copied ? (
                          <AssignmentTurnedInIcon />
                        ) : (
                          <FontIcon>content_paste</FontIcon>
                        )}
                      </Button>
                    </CopyToClipboard>
                  </div>
                </div>
                <br />
                {document.queryCommandSupported("copy") && (
                  <button
                    className="text-teal-500 hover:text-teal-400 border border-teal-500 hover:border-teal-400 rounded-md bg-transparent hover:bg-gray-800 hover:bg-opacity-20 px-3 py-2 mx-2 mb-2"
                    onClick={this.copyToClipboard}
                  >
                    {btnText}
                  </button>
                )}
              </div>
              <Hr />
              <div className="bg-gray-900">
                <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <div>
                    You can still access Netlify functions even on static
                    "marketing pages". This function is available at{" "}
                    <a href="/.netlify/functions/token-hider">
                      <pre className="bg-yellow-300 bg-opacity-20 px-2 py-1 inline-flex items-center rounded font-bold">
                        /.netlify/functions/token-hider
                      </pre>
                    </a>{" "}
                    and it uses an API_SECRET environment variable that is
                    hidden from the frontend!
                  </div>
                  <button
                    className="flex items-start rounded-lg border border-teal-400 px-5 py-4 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150"
                    onClick={this.handleClick}
                  >
                    {loading ? "Loading..." : "Call Lambda Function"}
                  </button>
                  <br />

                  {msg ? (
                    <div className="block max-w-2xl">
                      <img
                        src={msg[Math.floor(Math.random() * 10)]}
                        alt="dog"
                      ></img>
                    </div>
                  ) : (
                    <pre className="language-html">
                      <code>"Click the button and watch this!"</code>
                    </pre>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:pl-12 md:pt-4">
              <p>Now go build something great.</p>
              <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
                <Image />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
