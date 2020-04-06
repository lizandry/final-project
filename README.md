# swear jar

## Elevator Pitch

As the first openly nonbinary employee at a former company, the learning curve on they/them pronouns started to get to me. I didn't want the shame of correcting people mid-sentence, and they didn't want the shame of needing correction. My app, swear jar, aims to turn these interactions into a positive experience for all three people involved: the mistake maker, the mistake noticer, and the gofundme campaigner who benefits from the mistake.

## Technology
* React frontend, TypeScript if there's time to learn it
* user authentication
* Postgres/Express/Node backend, at this time

## MVP (Minimum Viable Product)
* user registration and team creation, with a targeted "swear" and teammates being allowed to set their own price, per swear
* hardcoded gofundme/other crowdfunding campaigns for each team to choose from
* swear counter, to track the "owed" total for each teammate
* reset/reduction, for when a teammate has made their pledged contribution
* nice to look at, and to use. nothing kills a good idea quicker than bad UI/UX
* this includes meeting accessibility standards
* teammates can have their own accounts, and handle their own swear counters
* the ability to end/archive a team neatly, instead of having the data hang around on the user's end
* easy-to-use on mobile

## Additional Nice-to-Have Features
* API integration, that serves up relevant campaigns for each team's chosen swear
* suggesting a new campaign when the current gofundme ends or has met its goal (or, even nicer, when they've gone over by 10-30%)
* ability to create passwords, once i'm certain of my ability to provide reasonable security

## Features That Will Probably Take A Lot More Time to Implement
* this is an actual, viable application with real-world users and impact
* partnerships/full integration with crowdfunding platforms, allowing users to opt-in (still deciding on best consent practices for demo, might use volunteered campaigns that have already met their goals)
* payment integration, direct from the platform
* full mobile app (hello, React Native!)
* "switch button". you press it, and it buys and sends the campaigner a nintendo switch and starter game. they can opt out and take the cash equivalent instead, but people in need deserve nice things just as much as anyone else. more than anyone else, to be honest

## Technical Risks

- implementing my full MVP is a little too big of a stretch
  - i'll circle back on mobile functionality after the project is due
- TypeScript is too complex to learn on-the-fly
  - that's fine, there's nothing wrong with vanilla JS!
- i finish my MVP early and don't know which additional feature to work on next
  - i will simply take a cool sip of water, and remember that this is a nice problem to have
- i forget/run out of time to build unit and integration tests
  - bill briefly becomes exhausted with me. but i believe we will both be able to move on from this quickly
- i can't implement my "switch button" idea, due to the fact that i will not be hosting crowdfunding campaigns myself
  - i'll be honest. this one keeps me up at night.
  
my mentor taught me about project planning, MVP, milestones and incremental progress weeks ago, and i didn't think i was facing too many risks from a technical standpoint. my MVP seemed perfectly achievable, given my current skill set and level of commitment.

so i went back and moved a few "Additional Nice-to-Have Features" into it :)
