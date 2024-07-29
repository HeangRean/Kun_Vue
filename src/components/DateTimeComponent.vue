<template>
  <div>
    <p>{{ fullFormattedDateTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullFormattedDateTime: ''
    };
  },
  created() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000); // Update time every second
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      const dayOfWeek = this.getDayOfWeekKhmer(now.getDay());
      const dayOfMonth = this.convertToKhmerNumerals(now.getDate().toString());
      const month = this.getMonthKhmer(now.getMonth());
      const year = this.convertToKhmerNumerals(now.getFullYear().toString());
      const hours = this.convertToKhmerNumerals(now.getHours().toString().padStart(2, '0'));
      const minutes = this.convertToKhmerNumerals(now.getMinutes().toString().padStart(2, '0'));
      const seconds = this.convertToKhmerNumerals(now.getSeconds().toString().padStart(2, '0'));
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      const prefix = this.getKhmerDatePrefix(now);
      this.fullFormattedDateTime = `${prefix}ទី ${dayOfMonth} ខែ${month} ឆ្នាំ${year} ម៉ោង ${formattedTime}`;
    },
    getDayOfWeekKhmer(dayOfWeek) {
      const days = ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"];
      return days[dayOfWeek] || "";
    },
    getMonthKhmer(month) {
      const months = ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
      return months[month] || "";
    },
    getKhmerDatePrefix(date) {
      const khmerDays = ["ថ្ងៃអាទិត្យ", "ថ្ងៃចន្ទ", "ថ្ងៃអង្គារ", "ថ្ងៃពុធ", "ថ្ងៃព្រហស្បតិ៍", "ថ្ងៃសុក្រ", "ថ្ងៃសៅរ៍"];
      const khmerMonths = ["មិគសិរ", "មាឃ", "ផល្គុន", "ចេត្រ", "ពិសាខ", "ជេស្ឋ", "អាសាឍ", "ស្រាពណ៏", "ភទ្របទ", "អស្សុជ", "កត្កិក", "បុស្ស"];
      const nameYear = ["ឆ្នាំជូត", "ឆ្នាំឆ្លូវ", "ឆ្នាំខាល", "ឆ្នាំថោះ", "ឆ្នាំរោង", "ឆ្នាំម្សាញ់", "ឆ្នាំមមី", "ឆ្នាំមមែ", "ឆ្នាំវក", "ឆ្នាំរកា", "ឆ្នាំច", "ឆ្នាំកុរ"];
      const dayOfWeek = khmerDays[date.getDay()];
      const dayOfMonth = this.convertToKhmerNumerals(date.getDate().toString());
      const month = khmerMonths[date.getMonth()];
      const year = nameYear[(date.getFullYear() - 4) % 12];
      const buddhistYear = this.convertToKhmerNumerals((date.getFullYear() + 544).toString());
      const lunarPhase = date.getDate() <= 15 ? 'កើត' : 'រោច';
      const dayInLunarPhase = date.getDate() <= 15 ? date.getDate() : date.getDate() - 15;
      const khmerDayInLunarPhase = this.convertToKhmerNumerals(dayInLunarPhase.toString());
      return `${dayOfWeek} ${khmerDayInLunarPhase} ${lunarPhase} ខែ${month} ${year} ឆស័ក ពុទ្ធសករាជ ${buddhistYear} ត្រូវនឹង ថ្ងៃ`;
    },
    convertToKhmerNumerals(number) {
      const khmerNumbers = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
      return number.split('').map(char => {
        if (char >= '0' && char <= '9') {
          return khmerNumbers[char];
        }
        return char;
      }).join('');
    }
  }
};
</script>

<style scoped>
p {
  font-size: 18px;
  font-family: 'Khmer OS Muol', Arial, sans-serif;
}
</style>
