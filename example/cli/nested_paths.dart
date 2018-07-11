import 'package:reflected_mustache/mustache.dart';

main() {
  var template = new Template('{{ author.name }}');
  final String output = template.renderString({'author': {'name': 'Greg Lowe'}});
  print(output);
}
