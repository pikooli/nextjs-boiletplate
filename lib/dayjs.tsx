import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/fr';
import 'dayjs/locale/en';
dayjs.extend(LocalizedFormat);
// dayjs.locale('fr');

export default dayjs;
