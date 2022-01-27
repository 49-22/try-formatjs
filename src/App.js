import {
  IntlProvider,
  FormattedMessage,
  FormattedNumber,
  injectIntl,
} from "react-intl";

function App({ locale, messages }) {
  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today iss {ts, date, ::yyyyMMdd}"
          values={{ ts: Date.now() }}
        />
        <br />
        {/* eslint-disable-next-line react/style-prop-object */}
        <FormattedNumber value={19} style="currency" currency="EUR" />
        <IntlComp />
      </p>
    </IntlProvider>
  );
}

export default App;

const Comp = ({ intl }) => {
  const buttonText = intl.formatMessage(
    {
      id: "1",
      description: "button 1",
      defaultMessage: "{name} - button 1",
    },
    {
      name: "press me",
    }
  );

  const buttonText2 = intl.formatMessage({
    id: "2",
    description: "button 2",
    defaultMessage: "press me - button 2",
  });

  const buttonText3 = intl.formatMessage({
    id: "3",
    description: "button 3",
    defaultMessage: "press me - button 3",
  });
  return (
    <>
      <button>{buttonText}</button>
      <button>{buttonText2}</button>
    </>
  );
};

const IntlComp = injectIntl(Comp);
