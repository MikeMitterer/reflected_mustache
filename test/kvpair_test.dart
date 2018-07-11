library test.unit.keyvalue;

import 'package:test/test.dart';
import 'package:reflected_mustache/mustache.dart';

import 'kvpair_test.reflectable.dart';

Template parse(String source, {bool lenient: false}) =>
    new Template(source, lenient: lenient);

class Name {
    final String firstname;
    final String lastname;

    Name(this.firstname, this.lastname);

    @override
    String toString() => "$firstname $lastname";
}

@mustache
class MyKVPair {
    final String key;
    final dynamic value;

    MyKVPair(this.key, this.value);
}

main() {
  initializeReflectable();

  group('KeyValue-Bar', () {
      test('> replace key/value', () {
          final String output = parse('abc-{{name}}-def')
                .renderString(
                    new MyKVPair("name", new Name("Mike", "Mitterer"))
                );

          expect(output, "abc-Mike Mitterer-def");
      }); // end of 'KeyValue-Pair' test

      test('> replace key/value with map', () {
          final String output = parse('abc-{{name.firstname}}/{{name.lastname}}-def')
              .renderString(
              new MyKVPair("name", { "firstname" : "Mike", "lastname" : "Mitterer" })
          );

          expect(output, "abc-Mike/Mitterer-def");
      }); // end of 'KeyValue-Pair' test

      test('List', () {
          final String output = parse('{{#section}}_{{var}}_{{/section}}').renderString({
              "section": [
                  new MyKVPair("var", "bob"),
                  new MyKVPair("var", "jim")
              ]
          });
          expect(output, equals('_bob__jim_'));
      });
  });
}
