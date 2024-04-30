/**
 * @warn dont render the email address this in the UI. this is only used to respond to the user. the logistics company should not have the email of the user sending the complaint
 * @todo build a parser for the timeStamp property
 */
export const complaints = [
  {
    name: "Charles' Factory",
    emailAddress: 'sallybusinesshub@gmail.com',
    orderId: 16777908,
    complaintMessage: 'Good day GIG, this afternoon after the delivery and head count we got to find out that not all off the goods ordered were delivered despite the fact we were notified that all goods purchased would be delivered. This has gone on to affect our flow of operation in the business as the goods to be stocked in inventory has been cut short. We are aiding for either  a quick investigation, a free delivery of remaining goods or a refunds of cash paid for goods ordered. We hope to get aa speedy response from you and we urge you look into the safe and proper delivery of goods ordered from your platform. Have a nice day.',
    location: 'Port Harcourt',
    date: new Date,
    timeStamp: "6:59 p.m."
  },
  {
    name: "Sally's Business Hub",
    emailAddress: 'sallybusinesshub@gmail.com',
    orderId: 16777908,
    complaintMessage: 'Good day GIG, this afternoon after the delivery and head count we got to find out that not all off the goods ordered were delivered despite the fact we were notified that all goods purchased would be delivered. This has gone on to affect our flow of operation in the business as the goods to be stocked in inventory has been cut short. We are aiding for either  a quick investigation, a free delivery of remaining goods or a refunds of cash paid for goods ordered. We hope to get aa speedy response from you and we urge you look into the safe and proper delivery of goods ordered from your platform. Have a nice day.',
    location: 'Port Harcourt',
    date: new Date,
    timeStamp: "6:59 p.m."
  }
]