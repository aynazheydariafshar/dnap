import { FormattedMessage, useIntl } from "react-intl";

function useStringTranslate(id) {
  const intl = useIntl();
  return intl.formatMessage({ id });
}
const translate = (id) => <FormattedMessage id={id} />;
translate.string = useStringTranslate;
export default translate;
