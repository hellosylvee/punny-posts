class Pun < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :gif, optional: true
  # belongs_to :account, optional: true

  def self.todays_puns
    self.where("created_at >= ?", Time.zone.now.beginning_of_day)
  end

  # def self.puns_by_day(day)
  #   self.where("created_at >= ? AND <= ?", day.beginning_of_day, day.end_of_day)
  # end
end
