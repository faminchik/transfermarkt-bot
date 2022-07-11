import _ from 'lodash';
import { formPlayerProfileData } from 'helpers/parsers/allLatestTransfers/addPlayerProfileData';

const memoizedFormPlayerProfileData = _.memoize(formPlayerProfileData);

export { memoizedFormPlayerProfileData };
