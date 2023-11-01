import { FormattedMessage, useIntl } from "react-intl";
// import { useSelector } from "react-redux";
// import { format, parseISO } from "date-fns-jalali";
// import formatEn from "date-fns/format";
// import parseISOEN from "date-fns/parseISO";

// function TranslateDate({ date, dontParse = false }) {
//     const fa = useSelector((state) => state.customize.rtlLayout);
//     if (date) {
//         if (dontParse) return fa ? format(date, 'HH:mm - dd MMMM yyyy') : formatEn(date, 'dd MMMM yyyy - HH:mm');
//         return fa ? format(parseISO(date), 'HH:mm - dd MMMM yyyy') : formatEn(parseISOEN(date), 'dd MMMM yyyy - HH:mm');
//     }
//     return '';
// }

function useStringTranslate(id) {
  const intl = useIntl();
  return intl.formatMessage({ id });
}
const translate = (id) => <FormattedMessage id={id} />;
translate.string = useStringTranslate;
// translate.date = (date, dontParse = false) => <TranslateDate date={date} dontParse={dontParse} />;
export default translate;
