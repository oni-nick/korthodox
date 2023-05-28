export {};

export function dateConverter(date : Date){
    const Year = date.getFullYear()
    const Month = date.getMonth()+1
    const Day = date.getDate()
    const Date = Year  + '년 ' + Month + '월 ' + Day + '일';
    return(Date);
  }

export interface UserBalance {
  id: string,
  user_email: string,
  type: 'ADS' | 'ETH' | 'KRW',
  amount: string
  available: string
}
