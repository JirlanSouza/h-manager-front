export function formatDate(date: Date) {
    if (!date || date.toString() == "Invalid Date") return "##/##/####";
    return date.toLocaleDateString("pt-br");
}
