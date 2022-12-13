export default function typeIs(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}