# frozen_string_literal: true

%w[Action Comedy Drama Horror].each do |genre_name|
  Genre.find_or_create_by!(name: genre_name)
end
