import { Options } from "../src/types";
import RRule from "../src/rrule";
import { optionsToString } from "../src/optionstostring";
import { expect } from "chai";

describe('optionsToString', () => {
  it('serializes valid single lines of rrules', function () {
    const expectations: ([ Partial<Options>, string ][]) = [
      [{ freq: RRule.WEEKLY, until: new Date(Date.UTC(2010, 0, 1, 0, 0, 0)) }, 'FREQ=WEEKLY;UNTIL=20100101T000000Z' ],
      [{ dtstart: new Date(Date.UTC(1997, 8, 2, 9, 0, 0)), tzid: 'America/New_York' }, 'DTSTART;TZID=America/New_York:19970902T090000' ]
    ]

    expectations.forEach(function (item) {
      const s = item[0]
      const s2 = item[1]
      expect(optionsToString(s), JSON.stringify(s)).to.deep.equal(s2)
    })
  })
})