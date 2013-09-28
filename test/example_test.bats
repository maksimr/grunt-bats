@test "equal string" {
      result="$(echo 'bats')"
      [ "$result" = "bats"  ]
}
