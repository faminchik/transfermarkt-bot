import _ from 'lodash';
import { formPlayerProfileData } from 'helpers/allLatestTransfers/addPlayerProfileData';

const memoizedFormPlayerProfileData = _.memoize(formPlayerProfileData);

export { memoizedFormPlayerProfileData };
