export async function getCode(name) {
   return 'ny';
}

export async function getToday(code) {
   return {
       'forecast': { 'condition': 'Rain', 'high': '19', 'low': '8' },
       'name': 'New York, USA'
   };
}

export async function getUpcoming(code) {
   return {
       'forecast': [
           { 'condition': 'Rain', 'high': '17', 'low': '6' },
           { 'condition': 'Overcast', 'high': '9', 'low': '3' },
           { 'condition': 'Overcast', 'high': '7', 'low': '3' }
       ],
       'name': 'New York'
   };
}