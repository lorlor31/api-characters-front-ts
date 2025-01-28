  
  // Convert Date in readable French string
  export const convertDate = (date:Date) => {
    const today = new Date();
    let years = today.getFullYear() - date.getFullYear();
    let months = today.getMonth() - date.getMonth();
    let days = today.getDate() - date.getDate();
    // Ajuster si les jours sont négatifs
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }
    // Ajuster si les mois sont négatifs
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    return `${years} ans, ${months} mois et ${days} jours`;
  };