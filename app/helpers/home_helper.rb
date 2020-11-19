module HomeHelper
  def tel_to(phone_number:, country_code:)
    phone_number = number_to_phone phone_number, country_code: country_code
    link_to phone_number, "tel:#{phone_number}"
  end
end
