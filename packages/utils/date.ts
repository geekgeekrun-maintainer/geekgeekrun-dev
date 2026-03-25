import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(utc)

export const transformUtcDateToLocalDate = (utcString: string) => {
  return dayjs.utc(utcString).local()
}
