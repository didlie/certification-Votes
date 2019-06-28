# certification-votes

## V0
The current implementation allows us to have a fixed set of account for
which an unlimited set of accounts can vote.

First one should create a few accounts which can be used in two ways:

* to be included in the list of accounts available for voting for
* to be used as accounts performing transactions against the smart contract,
  e.g. voting

In this document we assume that the reader is already familiar with the
procedure of account creation.

To originate the contact, use a command similar to the following:

```
tezos-client -A alphanet.tzscan.io originate contract voting0 for genny transferring 0 from genny running certificationVotes.tz --init '{ Elt "tz1TZwcbYiqfsJH9XDbmzaocttwMwqi9QWLH" {} ; Elt "tz1VKAYh4nE92ugzdPxE1gDxvuWvjzwKGsDt" {} }' --burn-cap 0.612
```

A few notes:

* `voting0` is the alias of smart contract to be created.
* `genny` is the alias of the account which originates the contract. Yours
  may be different.
* The inital value of storage for the smart contract `'{ Elt "…" {} ; Elt
  "…" {} }'` sets up the contract to be used to vote for two accounts, whose
  addresses are included as keys in the map. Apparently the addresses should
  be ordered. For that one could use [an online service][sorting-url].
* `--burn-cap` may be adjusted if you get an error message saying that the
  operation is going to exceed the cap limit.

This example uses alphanet, but you could use `zeronet.tzscan.io` instead.

[sorting-url]: http://crash-blog.com/outil-de-tri-de-ligne/

## V1
In this version, we add the deadline for voting.

To originate the contact, use a command similar to the following:
```
tezos-client -A alphanet.tzscan.io originate contract voting1 for genny transferring 0 from genny running certificationVotes.tz --init '(Pair 1561734120 { Elt "tz1TZwcbYiqfsJH9XDbmzaocttwMwqi9QWLH" {} ; Elt "tz1VKAYh4nE92ugzdPxE1gDxvuWvjzwKGsDt" {} })' --burn-cap 0.612
```

A few notes:
* `Pair 1561734120 ...`: `1561734120` is the timestamp
